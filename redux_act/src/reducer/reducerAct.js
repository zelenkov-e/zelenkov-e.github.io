import { createReducer } from "redux-act";
import { increment } from "../action/action";
import { decrement } from "../action/action";
import { createStore } from "redux";

export const reducer = createReducer({}, 1)
  .on(increment, state => state + 1)
  .on(decrement, (state, payload) => state - payload);

//Еще один синтаксис
// export const reducer = createReducer(on => {
//   on(increment, state => state * 2);
//   on(decrement, (state, { payload }) => state * payload);
// }, 1);
