import { createReducer } from 'redux-act';
<<<<<<< HEAD
import * as actions from '../action/action';
=======
import { increment } from '../action/action';
import { createStore } from "redux"




export const reducer = createReducer({}, 1)
  .on(increment, (state) => state * 2);
  // .on(decrement, (state, { payload }) => state * payload); 
  
>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28




<<<<<<< HEAD
export const reducer = createReducer(function (on,action) {
  on(actions.increment, (state) => state + 1);
  on(actions.decrement, (state) => state - 1);
}, 0);

=======




     
     

    
 
>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28
