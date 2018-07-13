import { combineReducers } from "redux";
import UserInfo from "./info";
import ActivePhone from "./phone_active";
import ColorChange from "./color_active";
import reducerAct from "./reducer_act";

const rootReducer = combineReducers({
  phones: UserInfo,
  active: ActivePhone,
  colorChange: ColorChange,
  countElement: reducerAct
});

export default rootReducer;
