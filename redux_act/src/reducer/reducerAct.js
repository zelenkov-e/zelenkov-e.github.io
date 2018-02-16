import { createAction, createReducer } from 'redux-act';;
// import { add } from  ' ../src/action/actionCreators ' ;
export const add = createAction('add');





export const reducer = createReducer(function (on) {
    on(add, (state) => state + 1);
  }, 0);


  //     on(add, (state, data) => ({...state,id:data}));
//   }, 0);
