import { createReducer } from "redux-act";
import { changeColor } from "../action/action";

const optionElementReducerColor = createReducer(on => {
  on(changeColor, state => true);
}, false);

export default optionElementReducerColor;
