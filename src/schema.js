import get from 'lodash/get';

import { resolve } from './resolve';

export function Entity( type, relationships = {} ) {
  return ( target, entities ) => {
    const entity = get( entities, [target.type || type, target.id] );

    return {
      ...entity,
      ...( Object.keys( relationships ).reduce( ( acc, key ) => ({ ...acc, [key]: resolve( entity[key], relationships[key], entities ) }), {}) )
    }
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
