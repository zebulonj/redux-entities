export function resolveEntity( state, ident ) {
  if ( !ident ) return;
  const { type, id } = ident.toObject();

  return state.getIn( ['$resources', type, id] );
}


export function resolveEntities( state, idents ) {
  return idents.map( ident => resolveEntity( state, ident ) );
}
