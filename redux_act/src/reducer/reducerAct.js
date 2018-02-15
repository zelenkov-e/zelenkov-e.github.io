import { createReducer } from  ' redux-act ' ;
import { add } from  ' ../action/actionCreators ' ;






export const reducer = createReducer(function (on) {
    on(add, (state, payload) => state + payload);
  }, 0);
  