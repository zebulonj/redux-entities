import { Map } from 'immutable';

import {
  RESOURCES_SET_ENTITY
} from './actions';

export function $resources( state = Map(), action ) {
  const { type, entity } = action;

  switch ( type ) {
    case RESOURCES_SET_ENTITY:
      return state.update( entity.get( 'type' ), Map(), resource => resource.set( entity.get( 'id' ), entity ) );
    default:
      return state;
  }
}
