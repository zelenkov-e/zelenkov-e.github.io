import { createReducer } from "redux-act";
import { clear, show } from "../action/action";

const visibleButtonReducer = createReducer(on => {
  on(clear, state => false);
  on(show, state => true);
}, true);

export default visibleButtonReducer;
