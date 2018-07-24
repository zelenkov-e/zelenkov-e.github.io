import { createReducer } from "redux-act";
import { changeColor } from "../action/action";

const colorElementReducer = createReducer(on => {
  on(changeColor, state => true);
}, false);

export default colorElementReducer;
