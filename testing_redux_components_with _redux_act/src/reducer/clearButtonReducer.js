import { createReducer } from "redux-act";
import { clearCount } from "../action/action";

const clearButtonReducer = createReducer(on => {
  on(clearCount, state => false);
}, true);

export default clearButtonReducer;
