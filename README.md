## Status: Experimental

## Installation

```shell
npm install --save https://github.com/zebulonj/redux-resources/archive/master.tar.gz
```

## Usage

```js
import { saveEntity } from '@zebulonj/redux-resources/actions';

const todo = {
  type: 'todos',
  id: 'a00011',
  attributes: {
    name: "Mow the lawn"
  }
};

store.dispatch( saveEntity( todo ) );
```

```js
import { createStore, applyMiddleware } from 'redux';
import { middleware as resourcesMiddleware } from '@zebulonj/redux-resources';

import { thunk } from 'redux-thunk';
import * as reducers from '@zebulonj/redux-resources/reducers';

const middleware = [
  thunk,
  resourcesMiddleware({
    save: entity => fetch( `/api/${ entity.type }/${ entity.id }`, { method: 'POST', body: entity })
  })
]

const store = createStore( combineReducers( reducers ), initialState(), applyMiddleware( middleware ) );
```

## Immutability

This modules assumes usage of [Immutable](http://facebook.github.io/immutable-js/) in the Redux state.

## Entity Data Structure

This module **requires** that every entity has `id` and `type` properties. It works well with the data structures used in [`json:api`](http://jsonapi.org/).
