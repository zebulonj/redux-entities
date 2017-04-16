import { Map } from 'immutable';

import {
  RESOURCES_SET_ENTITY
} from './actions';

export function $resources( state = Map(), action ) {
  const { type, entity } = action;

  switch ( type ) {
    case RESOURCES_SET_ENTITY:
      return state.update( entity.type, Map(), resource => resource.set( entity.id, entity ) );
    default:
      return state;
  }
}
