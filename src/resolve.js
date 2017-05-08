import isArray from 'lodash/isArray';

export function resolve( target, schema, entities, context ) {
  if ( !target ) return;
  if ( isArray( target ) ) return target.map( item => resolve( item, schema[0], entities ) );

  return schema( target, entities, context );
}

export default resolve;
