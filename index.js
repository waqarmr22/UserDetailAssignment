/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import UsersContainer from './containers/UsersContainer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import allReducers from './reducers/index';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const index = () => {
  <Provider store={store}>
    <UsersContainer />
  </Provider>;
};
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
