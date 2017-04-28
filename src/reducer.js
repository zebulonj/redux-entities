import actionTypes from './actions';

export function $entities( state = {}, action ) {
  const { type, entity } = action;

  switch ( type ) {
    case actionTypes.SET:
      return {
        ...state,
        [entity.type]: {
          ...state[entity.type],
          [entity.id]: entity
        }
      };
    default:
      return state;
  }
}

export default $entities;
