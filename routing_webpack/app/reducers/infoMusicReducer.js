import {
    GET_MUSIC_REQUEST,
    GET_MUSIC_SUCCESS
   
  } from "../constants/infoConstants";

  const initialState = {
    music:[]//нач состояние
  }

  const musicReducer = function(state =initialState,action){
    switch(action.type) {
        case GET_MUSIC_REQUEST:
          return state;
         
        
        case GET_MUSIC_SUCCESS:
          return  Object.assign(
                {}, 
                state,
                //кон состояние - массив ajax 
                {music:action.payloadtMusic}
            );
         }
        return state;
      }

      export default musicReducer