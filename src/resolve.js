import isArray from 'lodash/isArray';

export function resolve( target, schema, entities ) {
  if ( !target ) return;
  if ( isArray( target ) ) return target.map( item => resolve( item, schema[0], entities ) );

  return schema( target, entities );
}

export default resolve;
