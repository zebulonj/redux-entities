import {
  RESOURCES_SAVE_ENTITY,
  setEntity
} from './actions';

export const middleware = ({ save }) => store => {
  const { dispatch } = store;

  return next => action => {
    switch ( action.type ) {
      case RESOURCES_SAVE_ENTITY:
        return save( action.entity, dispatch )
          .then( res => {
            dispatch( setEntity( res ) );
            return res;
          });
      default:
        return next( action );
    }
  }
}
