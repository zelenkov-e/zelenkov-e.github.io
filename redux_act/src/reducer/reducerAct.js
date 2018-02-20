import { createReducer } from 'redux-act';
import * as increment from '../action/action';
import { createStore } from "redux"




export const reducer = createReducer(function (on) {
  on(increment, (state) => state + 1);
},0);


// on(increment, (state,action) => {
//         return Object.assign(
//           {}, 
//           state,
//           {id:action.payload}
//         )
//     });
//   }, 0);

















  // let  store = createStore(reducer);
  // store.dispatch(increment);

     
//  on(increment, (state, data) => ({...state,id:data}));
//   }, 0);  
 






     
     

    
 