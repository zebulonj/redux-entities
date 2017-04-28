import {
  RESOURCES_SAVE_ENTITY,
  setEntity
} from './actions';

const defaultOptions = {
  parse: data => data
};

export function middleware( options = {} ) {
  options = Object.assign( {}, defaultOptions, options );

  const { save, parse } = options;

  return store => {
    const { dispatch } = store;

    return next => action => {
      switch ( action.type ) {
        case RESOURCES_SAVE_ENTITY:
          return save( action.entity, dispatch )
            .then( res => parse( res ) )
            .then( res => {
              dispatch( setEntity( res ) );
              return res;
            });
        default:
          return next( action );
      }
    }
  }
}
