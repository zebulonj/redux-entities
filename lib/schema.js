'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Entity = Entity;
exports.Structure = Structure;
exports.External = External;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _resolve = require('./resolve');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Entity(type) {
  var relationships = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (target, entities) {
    var entity = (0, _get2.default)(entities, [target.type || type, target.id]);

    return _extends({}, entity, Object.keys(relationships).reduce(function (acc, key) {
      return _extends({}, acc, _defineProperty({}, key, (0, _resolve.resolve)(entity[key], relationships[key], entities)));
    }, {}));
  };
}

function Structure() {
  var relationships = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (target, entities) {
    return _extends({}, target, Object.keys(relationships).reduce(function (acc, key) {
      return _extends({}, acc, _defineProperty({}, key, (0, _resolve.resolve)(target[key], relationships[key], entities)));
    }, {}));
  };
}

function External() {
  var relationships = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var accessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, context) {
    return (0, _get2.default)(context, [target.id]);
  };

  return function (target, entities, context) {
    var entity = accessor(target, context);

    return _extends({}, entity, Object.keys(relationships).reduce(function (acc, key) {
      return _extends({}, acc, _defineProperty({}, key, (0, _resolve.resolve)(entity[key], relationships[key], entities)));
    }, {}));
  };
}