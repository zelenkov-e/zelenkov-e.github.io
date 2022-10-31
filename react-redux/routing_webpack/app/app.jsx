import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './container/home.jsx';
import Products from './container/products.jsx';
import Track from './container/tracks.jsx';
import Music from './container/music.jsx';
import NotFound from './components/notfound.jsx';


import { applyMiddleware,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';//<-- добавили redux-thunk

import { Provider } from 'react-redux';
import  reducers  from './reducers/combineReducer.js';
import  createBrowserHistory  from 'history/createBrowserHistory';


 function  configureStore(initialState) {
	const logger = createLogger()
	const store = createStore(
		reducers,
		initialState,
		//добавили в applyMiddleware(createLogger()) 
		applyMiddleware(thunk,logger))// <-- добавили его в цепочку перед logger'ом
	return store

}

const store = configureStore()
const newHistory = createBrowserHistory(); 



ReactDOM.render(
    <Provider store={store}>
     <Router history={newHistory}>
        <div>
           <Nav />
           <hr />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/music" component={Music}/>
                <Route path="/tracks" component={Track}/>
                <Route component={NotFound} />
            </Switch>
        </div>
        </Router>
    </Provider>,
    document.getElementById("app")
)
