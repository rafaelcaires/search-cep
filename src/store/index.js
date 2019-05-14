import { createStore, applyMiddleware, compose } from 'redux';

import createMiddlewareSaga from 'redux-saga';
import saga from './sagas';

// Settings Routes and History
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';

import reducers from './reducers';

const middlewareSaga = createMiddlewareSaga();

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [middlewareSaga, routerMiddleware(history)];

const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(...middlewares),
    devTools
  )
);

middlewareSaga.run(saga);

export default store;
