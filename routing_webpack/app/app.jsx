import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Products from './components/products.jsx';
import NotFound from './components/notfound.jsx';
// import Track from './components/tracks.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { reducers } from './reducers/combineReducer.js';
import { hashHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';




// const store = createStore(reducers);
// const history = syncHistoryWithStore(hashHistory, store);





ReactDOM.render(
    // <Provider store={store}>
    //   <Router history={history}>

   <Router> 
        <div>
           <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route component={NotFound} />
                {/* <Route path="/tracks/:id" component={Track }/> */}
            </Switch>
        </div>
        </Router>,
    // </Provider>,
    document.getElementById("app")
)
