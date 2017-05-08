## Status: Experimental

## Installation

```shell
npm install --save https://github.com/zebulonj/redux-entities/archive/master.tar.gz
```

## Usage

```js
import { saveEntity } from '@zebulonj/redux-entities/actions';

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
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { middleware as resourcesMiddleware } from '@zebulonj/redux-entities';

import { thunk } from 'redux-thunk';
import $entities from '@zebulonj/redux-entities/lib/reducer';

const middleware = [
  thunk,
  resourcesMiddleware({
    save: entity => fetch( `/api/${ entity.type }/${ entity.id }`, { method: 'POST', body: entity })
  })
]

const store = createStore( combineReducers({ $entities }), initialState(), applyMiddleware( middleware ) );
```

## Entity Data Structure

This module **requires** that every entity has `id` and `type` properties. It works well with the data structures used in [`json:api`](http://jsonapi.org/).
