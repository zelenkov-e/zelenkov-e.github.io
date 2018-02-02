import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import  tracks  from './infoReducer';
import  weatherReduserMain from './infoNewsReduser';
import activeTracks from "./activeReducer"

 //routing: routerReducer, - обяз  для routing
const reducers = combineReducers({
    routing: routerReducer,
    tracks:tracks,
    active:activeTracks,
    weatherMain:weatherReduserMain 

    
})

export default reducers