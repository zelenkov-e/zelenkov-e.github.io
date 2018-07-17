import { createReducer } from "redux-act";
import { clear } from "../action/action";

const colorReducer = createReducer(on => {
  on(clear, state => false);
}, true);

export default colorReducer;
