
import React from 'react';
import ReactDOM from 'react-dom';
import Content  from './js/content.js'; 


import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./src/reducer/index"


const store = createStore(rootReducer)


ReactDOM.render(
	<Provider store={store}>
		<Content />
	</Provider>, 
	document.getElementById('content')
	);




