export const actionTypes = createTypes([
  'SAVE',
  'LOAD',
  'SET',
  'PATCH'
], 'REDUX_ENTITIES' );

export default actionTypes;

function createTypes( arr = [], namespace = '' ) {
  return arr.reduce( ( acc, item ) => ({ ...acc, [item]: [namespace, item].join( '/' ) }) );
}

export function saveEntity( entity, schema ) {
  return {
    type: actionTypes.SAVE,
    entity,
    schema
  }
}

export function loadEntity({ type: entityType, id }) {
  return {
    type: actionTypes.LOAD,
    entityType,
    id
  }
}

export function setEntity( entity ) {
  return {
    type: actionTypes.SET,
    entity
  }
}

export const setEntities = entities => dispatch => entities.map( entity => dispatch( setEntity( entity ) ) );
