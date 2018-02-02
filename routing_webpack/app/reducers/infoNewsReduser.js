import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
   
  } from "../constants/infoConstants";

  const initialState = {
    main:[]//нач состояние
  }

  const weatherReduserMain = function(state =initialState,action){
    switch(action.type) {
        case GET_NEWS_REQUEST:
          return state;
         
        
        case GET_NEWS_SUCCESS:
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