import redusers from "../reducer/index";
import { applyMiddleware,createStore } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';//<-- добавили redux-thunk






export default function  configureStore(initialState) {
	const logger = createLogger()
	const store = createStore(
		redusers,
		initialState,
		//добавили в applyMiddleware(createLogger()) 
		applyMiddleware(thunk,logger))// <-- добавили его в цепочку перед logger'ом
	return store

}



