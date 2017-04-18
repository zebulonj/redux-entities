import { Map, Set } from 'immutable';

const defaultOptions = {
  props: {},
  defaults: {}
};

export function Entity( type, options = {} ) {
  const { props, defaults } = Object.assign( {}, defaultOptions, options );

  return ( id, instanceProps = {} ) => Map( Object.assign( {}, defaults, instanceProps ) ).reduce( ( base, prop, key ) => ( props[key] || Ignore )( base, key, prop ), Map({ type, id }) );
}

// TODO: Question: Whether to include `id` and `type` in returned props.
Entity.props = function( entity ) {
  const { attributes, relationships, meta } = entity.toObject();

  return attributes.merge( relationships ).merge( meta );
}

export const School = Entity( 'schools', {
  props: {
    name: Attribute,
    teachers: Many
  },
  defaults: {
    name: 'Unknown',
    teachers: Set()
  }
});

export function Attribute( base, key, prop ) {
  return base.setIn( ['attributes', key], prop );
}

export function One( base, key, prop ) {
  return base.setIn( ['relationships', key], Ident( prop ) )
}

export function Many( base, key, props ) {
  return base.setIn( ['relationships', key], Set( props ).map( prop => Ident( prop ) ) )
}

export function Ignore( base ) {
  return base;
}

export function Ident( entity ) {
  const { id, type } = entity;

  return Map({ type, id });
}
