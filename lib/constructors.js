'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.School = undefined;
exports.Entity = Entity;
exports.Attribute = Attribute;
exports.One = One;
exports.Many = Many;
exports.Ignore = Ignore;
exports.Ident = Ident;

var _immutable = require('immutable');

var defaultOptions = {
  props: {},
  defaults: {}
};

function Entity(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _Object$assign = Object.assign({}, defaultOptions, options),
      props = _Object$assign.props,
      defaults = _Object$assign.defaults;

  return function (id) {
    var instanceProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _immutable.Map)(Object.assign({}, defaults, instanceProps)).reduce(function (base, prop, key) {
      return (props[key] || Ignore)(base, key, prop);
    }, (0, _immutable.Map)({ type: type, id: id }));
  };
}

// TODO: Question: Whether to include `id` and `type` in returned props.
Entity.props = function (entity) {
  var _entity$toObject = entity.toObject(),
      attributes = _entity$toObject.attributes,
      relationships = _entity$toObject.relationships,
      meta = _entity$toObject.meta;

  return attributes.merge(relationships).merge(meta);
};

var School = exports.School = Entity('schools', {
  props: {
    name: Attribute,
    teachers: Many
  },
  defaults: {
    name: 'Unknown',
    teachers: (0, _immutable.Set)()
  }
});

function Attribute(base, key, prop) {
  return base.setIn(['attributes', key], prop);
}

function One(base, key, prop) {
  return base.setIn(['relationships', key], Ident(prop));
}

function Many(base, key, props) {
  return base.setIn(['relationships', key], (0, _immutable.Set)(props).map(function (prop) {
    return Ident(prop);
  }));
}

function Ignore(base) {
  return base;
}

function Ident(entity) {
  var id = entity.id,
      type = entity.type;


  return (0, _immutable.Map)({ type: type, id: id });
}