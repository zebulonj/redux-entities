'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = middleware;

var _actions = require('./actions');

var defaultOptions = {
  parse: function parse(data) {
    return data;
  }
};

function middleware() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = Object.assign({}, defaultOptions, options);

  var _options = options,
      save = _options.save,
      parse = _options.parse;


  return function (store) {
    var dispatch = store.dispatch;


    return function (next) {
      return function (action) {
        switch (action.type) {
          case _actions.RESOURCES_SAVE_ENTITY:
            return save(action.entity, dispatch).then(function (res) {
              return parse(res);
            }).then(function (res) {
              dispatch((0, _actions.setEntity)(res));
              return res;
            });
          default:
            return next(action);
        }
      };
    };
  };
}