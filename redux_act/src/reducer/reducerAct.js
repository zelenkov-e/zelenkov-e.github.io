import { createAction, createReducer } from 'redux-act';
// import { add } from  ' ../src/action/actionCreators.js ' ;
export const add = createAction('add');
// let data = 1;




export const reducer = createReducer(function (on,action) {
  on(add, (state) => state + action.payload);
}, 0);
     
//  on(add, (state, data) => ({...state,id:data}));
//   }, 0);  
 

// on(add, (state,data) => {
//         return Object.assign(
//           {}, 
//           state,
//           {id:data}
//         )
//     });
//   }, 0);




     
     

    
 