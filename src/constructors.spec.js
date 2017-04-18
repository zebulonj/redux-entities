import test from 'tape';

import { Entity, Attribute } from './constructors';

test( "A factory...", sub => {
  sub.test( "...should assign attribute properties to the attributes object.", assert => {
    assert.plan( 1 );

    const School = Entity( 'schools', {
      props: {
        name: Attribute
      }
    });

    const school = School( '1', { name: 'Mira Vista' });

    assert.deepEqual( { name: 'Mira Vista' }, school.get( 'attributes' ).toJS(), "Attributes should be correctly collected." );

    assert.end();
  });
});
