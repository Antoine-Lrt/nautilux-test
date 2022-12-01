import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(rootSaga);

export default store;

// export default function configureStore(initialState = {}) {
//   return createStore(
//     rootReducer(window.history),
//     initialState,
//     compose(applyMiddleware(sagaMiddleware), reduxDevTools)
//   );
// }
