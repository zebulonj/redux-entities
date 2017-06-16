export function resolve( target, schema, entities, context ) {
  if ( !target ) return;
  if ( Array.isArray( target ) ) return target.map( item => resolve( item, schema[0], entities ) );

  return schema.resolve( target, entities, context );
}

export default resolve;
