/* eslint-disable import/prefer-default-export */
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
