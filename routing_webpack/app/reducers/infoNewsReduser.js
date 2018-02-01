import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
   
  } from "../constants/infoConstants";



<<<<<<< HEAD
export default function newsInfo(state = [],action){
=======
export default function newsInfo(state = null,action){
>>>>>>> 50ceb16f686fdeeca50732f995e8f40e7fb5911d
    switch(action.type) {
        case GET_NEWS_REQUEST:
          return state;
         
        
        case GET_NEWS_SUCCESS:
          return  Object.assign(
                {}, 
                state,
                //кон состояние - массив ajax 
<<<<<<< HEAD
                { newsElements:action.payloadNews}
=======
                {newsElements:action.payloadNews}  
>>>>>>> 50ceb16f686fdeeca50732f995e8f40e7fb5911d
            );
         }
        return state;
      }