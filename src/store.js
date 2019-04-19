import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

export function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(promiseMiddleware, thunkMiddleware, createLogger())
  );
}
