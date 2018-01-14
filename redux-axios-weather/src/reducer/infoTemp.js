import {
        GET_WEATHER_REQUEST,
        GET_WEATHER_SUCCESS
      } from "../constants/info";


const initialState = {
  temp:[]//нач состояние
}


const weatherReduserTemp = function(state = initialState, action) {
  switch(action.type) {
  case GET_WEATHER_REQUEST:
    return state;
   
  
  case GET_WEATHER_SUCCESS:
    return  Object.assign(
          {}, 
          state,
          //кон состояние - массив ajax 
          {temp:action.payloadTemp}
      );
    }
  return state;
}

export default weatherReduserTemp



