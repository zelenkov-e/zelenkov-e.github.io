//action creater
import { createAction, createReducer } from 'redux-act';


export const add = createAction('add');

// export const add = createAction('add', ({data})=>data);

export const getAction = () =>{
 	
      return{
        type:"GET_ACTION",
        payload: 1
      }
    }

