import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
//this is what binds react and redux together
import { Provider } from 'react-redux';
import sagaMiddleware from 'redux-saga';

//we can create different reducers to handle dif aspects then combine them
//this will be the root reducer

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
