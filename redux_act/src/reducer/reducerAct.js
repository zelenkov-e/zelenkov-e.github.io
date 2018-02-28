import { createReducer } from "redux-act";
import { increment, decrement } from "../action/action";

export const reducer = createReducer(function(on) {
  on(increment, state => state + 1);
  on(decrement, state => state - 2);
}, 0);
