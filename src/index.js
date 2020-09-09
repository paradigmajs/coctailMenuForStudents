import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Coctail from './Coctail'
import * as serviceWorker from './serviceWorker';
import {Router, Route} from 'react-router'
import * as createHistory from "history";

import Ingridient from './Ingridient';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers/index'

const history = createHistory.createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
 
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
        <Route path = '/' component={App} exact/>
        <Route path = '/coctail/:name' component={Coctail}  exact/>
        <Route path = '/ingridient/:ing' component={Ingridient}  exact/>
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
