import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Products from './components/products.jsx';
import NotFound from './components/notfound.jsx';
import Track from './components/tracks.jsx';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  reducers  from './reducers/combineReducer.js';
import  createBrowserHistory  from 'history/createBrowserHistory';

const store = createStore(reducers);
const newHistory = createBrowserHistory(); 



ReactDOM.render(
    <Provider store={store}>
     <Router history={newHistory}>
        <div>
           <Nav />
           <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/tracks" component={Track}/>
                {/* <Route path="/tracks/:id" component={Track }/> */}
                <Route component={NotFound} />
            </Switch>
        </div>
        </Router>
    </Provider>,
    document.getElementById("app")
)
