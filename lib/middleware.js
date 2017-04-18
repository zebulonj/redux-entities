'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = undefined;

var _actions = require('./actions');

var middleware = exports.middleware = function middleware(_ref) {
  var save = _ref.save;
  return function (store) {
    var dispatch = store.dispatch;


    return function (next) {
      return function (action) {
        switch (action.type) {
          case _actions.RESOURCES_SAVE_ENTITY:
            return save(action.entity, dispatch).then(function (res) {
              dispatch((0, _actions.setEntity)(res));
              return res;
            });
          default:
            return next(action);
        }
      };
    };
  };
};