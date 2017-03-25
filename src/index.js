import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducers,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(mySaga);
// store.runSaga = sagaMiddleware.run;

ReactDOM.render(
  // <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  // </Provider>
  , document.getElementById('root'));
