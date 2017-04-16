export const RESOURCES_SAVE_ENTITY = 'RESOURCES_SAVE_ENTITY';
export const RESOURCES_LOAD_ENTITY = 'RESOURCES_LOAD_ENTITY';

export const RESOURCES_SET_ENTITY = 'RESOURCES_SET_ENTITY';

export function saveEntity( entity ) {
  return {
    type: RESOURCES_SAVE_ENTITY,
    entity
  }
}

export function loadEntity() {

}

export function setEntity( entity ) {
  return {
    type: RESOURCES_SET_ENTITY,
    entity
  }
}
