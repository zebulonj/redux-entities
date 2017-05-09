'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.saveEntity = saveEntity;
exports.loadEntity = loadEntity;
exports.setEntity = setEntity;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = exports.actionTypes = createTypes(['SAVE', 'LOAD', 'SET', 'PATCH'], 'REDUX_ENTITIES');

exports.default = actionTypes;


function createTypes() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return arr.reduce(function (acc, item) {
    return _extends({}, acc, _defineProperty({}, item, [namespace, item].join('/')));
  });
}

function saveEntity(entity) {
  return {
    type: actionTypes.SAVE,
    entity: entity
  };
}

function loadEntity() {}

function setEntity(entity) {
  return {
    type: actionTypes.SET,
    entity: entity
  };
}

var setEntities = exports.setEntities = function setEntities(entities) {
  return function (dispatch) {
    return entities.map(function (entity) {
      return dispatch(setEntity(entity));
    });
  };
};