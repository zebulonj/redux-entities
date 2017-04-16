export function resolveEntity( state, ident ) {
  const { type, id } = ident;

  return state.getIn( ['$resources', type, id] );
}


export function resolveEntities( state, idents ) {
  return idents.map( ident => resolveEntity( state, ident ) );
}
