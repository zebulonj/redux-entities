'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveEntity = saveEntity;
exports.loadEntity = loadEntity;
exports.setEntity = setEntity;
var RESOURCES_SAVE_ENTITY = exports.RESOURCES_SAVE_ENTITY = 'RESOURCES_SAVE_ENTITY';
var RESOURCES_LOAD_ENTITY = exports.RESOURCES_LOAD_ENTITY = 'RESOURCES_LOAD_ENTITY';

var RESOURCES_SET_ENTITY = exports.RESOURCES_SET_ENTITY = 'RESOURCES_SET_ENTITY';

function saveEntity(entity) {
  return {
    type: RESOURCES_SAVE_ENTITY,
    entity: entity
  };
}

function loadEntity() {}

function setEntity(entity) {
  return {
    type: RESOURCES_SET_ENTITY,
    entity: entity
  };
}