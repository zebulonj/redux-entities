export function pack( target, schema, options ) {
  if ( !target ) return target;

  return schema.pack( target, options );
}

export default pack;
