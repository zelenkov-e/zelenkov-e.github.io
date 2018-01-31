import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import  tracks  from './infoReducer';
import  newsInfo from './infoNewsReduser';
import activeTracks from "./activeReducer"

 //routing: routerReducer, - обяз  для routing
const reducers = combineReducers({
    routing: routerReducer,
    tracks:tracks,
    active:activeTracks,
    news:newsInfo

    
})

export default reducers