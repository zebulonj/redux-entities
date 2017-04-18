'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _constructors = require('./constructors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)("A factory...", function (sub) {
  sub.test("...should assign attribute properties to the attributes object.", function (assert) {
    assert.plan(1);

    var School = (0, _constructors.Entity)('schools', {
      props: {
        name: _constructors.Attribute
      }
    });

    var school = School('1', { name: 'Mira Vista' });

    assert.deepEqual({ name: 'Mira Vista' }, school.get('attributes').toJS(), "Attributes should be correctly collected.");

    assert.end();
  });
});