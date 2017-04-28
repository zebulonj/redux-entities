'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolve(state, idents) {
  if (!idents) return;
  if ((0, _isArray2.default)(idents)) return idents.map(function (ident) {
    return resolve(state, ident);
  });

  return (0, _get2.default)(state, ['$entities', idents.type, idents.id]);
}

exports.default = resolve;