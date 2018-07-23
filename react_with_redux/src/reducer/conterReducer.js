import { createReducer } from "redux-act";
import { increment, decrement } from "../action/action";

const counterReducer = createReducer(on => {
  on(increment, state => state + 1);
  on(decrement, state => state - 1);
}, 0);

export default counterReducer;
