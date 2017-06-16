import get from 'lodash/get';

import { resolve } from './resolve';

function ident( entity, schema ) {
  if ( Array.isArray( entity ) ) {
    return entity.map( item => ident( item, schema[0] ) );
  }

  return schema.ident( entity );
}

export function Entity( type, { relationships = {} } = {} ) {
  console.log( "Entity:", type, relationships );
  return {
    ident: ( target ) => ({
      id: target.id,
      type: target.type || type
    }),

    resolve: ( target, entities ) => {
      const entity = get( entities, [target.type || type, target.id] );

      if ( !entity ) {
        const err = new Error( `Failed to resolve entity for ${ [target.type || type, target.id].join( ':' ) }` );
        err.name = 'ResolutionError';

        throw err;
      }

      return {
        ...entity,
        ...( Object.keys( relationships ).reduce( ( acc, key ) => ({ ...acc, [key]: resolve( entity[key], relationships[key], entities ) }), {}) )
      }
    },

    pack: ({ id, type: entityType, ...props }, { omit = [] } = {} ) => ({
      id,
      type: entityType || type,
      attributes: {
        ...Object.keys({ ...props })
          .filter( key => omit.indexOf( key ) === -1 )
          .filter( key => !relationships[key] )
          .reduce( ( acc, key ) => ({ ...acc, [key]: props[key] }), {})
      },
      relationships: {
        ...Object.keys({ ...props })
          .filter( key => omit.indexOf( key ) === -1 )
          .filter( key => !!relationships[key] )
          .reduce( ( acc, key ) => ({ ...acc, [key]: { data: ident( props[key], relationships[key] ) } }), {})
      }
    }),

    unpack: data => data
  };
}

export function Structure( relationships = {} ) {
  return ( target, entities ) => ({
    ...target,
    ...( Object.keys( relationships ).reduce( ( acc, key ) => ({ ...acc, [key]: resolve( target[key], relationships[key], entities ) }), {}) )
  })
}

export function External(
  relationships = {},
  accessor = ( target, context ) => get( context, [target.id] )
) {
  return ( target, entities, context ) => {
    const entity = accessor( target, context );

    return {
      ...entity,
      ...( Object.keys( relationships ).reduce( ( acc, key ) => ({ ...acc, [key]: resolve( entity[key], relationships[key], entities ) }), {}) )
    }
  }
}
