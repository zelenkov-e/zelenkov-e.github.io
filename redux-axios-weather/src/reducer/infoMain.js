import {
        GET_WEATHER_REQUEST,
        GET_WEATHER_SUCCESS
      } from "../constants/info";


const initialState = {
  main:[]//нач состояние
}



const weatherReduserMain = function(state = initialState, action) {
  switch(action.type) {
  case GET_WEATHER_REQUEST:
    return state;
   
  
  case GET_WEATHER_SUCCESS:
    return  Object.assign(
          {}, 
          state,
          //кон состояние - массив ajax 
          {main:action.payloadMain}
        );
      }
  return state;
}

export default weatherReduserMain



