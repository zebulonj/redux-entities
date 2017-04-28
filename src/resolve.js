import get from 'lodash/get';
import isArray from 'lodash/isArray';

export function resolve( state, idents ) {
  if ( !idents ) return;
  if ( isArray( idents ) ) return idents.map( ident => resolve( state, ident ) );

  return get( state, ['$entities', idents.type, idents.id] );
}

export default resolve;
