'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolve = require('./resolve');

Object.keys(_resolve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolve[key];
    }
  });
});

var _schema = require('./schema');

Object.keys(_schema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schema[key];
    }
  });
});