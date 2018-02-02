import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
   
  } from "../constants/infoConstants";



export default function newsInfo(state =[],action){
    switch(action.type) {
        case GET_NEWS_REQUEST:
          return state;
         
        
        case GET_NEWS_SUCCESS:
          return  Object.assign(
                {}, 
                state,
                //кон состояние - массив ajax 
                { newsElements:action.payloadNews}
            );
         }
        return state;
      }