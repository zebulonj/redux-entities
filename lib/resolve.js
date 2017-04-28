'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolve(target, schema, entities) {
  if (!target) return;
  if ((0, _isArray2.default)(target)) return target.map(function (item) {
    return resolve(item, schema[0], entities);
  });

  return schema(target, entities);
}

exports.default = resolve;