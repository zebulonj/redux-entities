'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveEntity = resolveEntity;
exports.resolveEntities = resolveEntities;
function resolveEntity(state, ident) {
  if (!ident) return;

  var _ident$toObject = ident.toObject(),
      type = _ident$toObject.type,
      id = _ident$toObject.id;

  return state.getIn(['$resources', type, id]);
}

function resolveEntities(state, idents) {
  return idents.map(function (ident) {
    return resolveEntity(state, ident);
  });
}