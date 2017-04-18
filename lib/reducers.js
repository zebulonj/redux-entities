'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$resources = $resources;

var _immutable = require('immutable');

var _actions = require('./actions');

function $resources() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
  var action = arguments[1];
  var type = action.type,
      entity = action.entity;


  switch (type) {
    case _actions.RESOURCES_SET_ENTITY:
      return state.update(entity.get('type'), (0, _immutable.Map)(), function (resource) {
        return resource.set(entity.get('id'), entity);
      });
    default:
      return state;
  }
}