
import React from 'react';
import ReactDOM from 'react-dom';
import Content  from './js/content.js'; 


import { Provider } from "react-redux"
import { createStore } from "redux"
// import rootReducer from "../reducer/combineReducer"
import { rootReducer } from "./reducer/combineReducer" 


const counterStore = createStore(
	rootReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
	<Provider store={counterStore}>
		<Content />
	</Provider>, 
	document.getElementById('content')
	);




