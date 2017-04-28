import get from 'lodash/get';

import { resolve } from './resolve';

export function Entity( type, relationships = {} ) {
  return ( target, entities ) => {
    const entity = get( entities, [target.type, target.id] );

    return {
      ...entity,
      ...( Object.keys( relationships ).reduce( ( acc, key ) => ({ ...acc, [key]: resolve( entity[key], relationships[key], entities ) }), {}) )
    }
  };
}
