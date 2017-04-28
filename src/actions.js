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

export function saveEntity( entity ) {
  return {
    type: actionTypes.SAVE,
    entity
  }
}

export function loadEntity() {

}

export function setEntity( entity ) {
  return {
    type: actionTypes.SET,
    entity
  }
}
