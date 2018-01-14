import {
        GET_WEATHER_REQUEST,
        GET_WEATHER_SUCCESS
      } from "../constants/info";


const initialState = {
  
  weatherElements:[]//нач состояние
}


const weatherReduserElements = function(state = initialState, action) {
  switch(action.type) {
  case GET_WEATHER_REQUEST:
    return state;
   
  
  case GET_WEATHER_SUCCESS:
    return  Object.assign(
          {}, 
          state,
          //кон состояние - массив ajax 
          { weatherElements:action.payloadElement}
      );
   }
  return state;
}

export default weatherReduserElements



