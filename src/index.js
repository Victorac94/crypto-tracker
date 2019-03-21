import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fetchTopReducer from './store/reducers/fetchTopReducer';
import fetchDetailsReducer from './store/reducers/fetchDetailsReducer';
import generalReducer from './store/reducers/generalReducer';
import { watchActions } from './store/sagas/index';

// Si estamos en development mode entonces habilitamos la extension de chrome, sino usamos 'compose'
// process.env hace referencia a las variables de entorno de React
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null || compose;

const combinedReducers = combineReducers({
  topReducer: fetchTopReducer,
  detailsReducer: fetchDetailsReducer,
  generalReducer: generalReducer
});

// Creamos el Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Añadimos el sagaMiddleware  al store
const store = createStore(combinedReducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// Corremos en el sagaMiddleware el saga que hemos creado e importado.
// Estos sagas son los que ejecutan otros sagas cuando ciertas acciones son despachadas en la aplicación.
sagaMiddleware.run(watchActions);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
