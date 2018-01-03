
import React from 'react';
import ReactDOM from 'react-dom';
import Content  from './js/content.js'; 
import { Provider } from "react-redux"
import { createStore } from "redux"
import redusers from "./src/reducer/index"


const store = createStore(redusers)


ReactDOM.render(
	<Provider store={store}>
		<Content />
	</Provider>, 
	document.getElementById('content')
	);




