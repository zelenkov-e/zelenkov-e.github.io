import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
// import { tracks } from './infoReducer';


const reducers = combineReducers({
    routing: routerReducer,
    tracks

    
})

export default reducers