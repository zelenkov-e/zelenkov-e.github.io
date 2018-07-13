import { combineReducers } from "redux";
import UserInfo from "./info";
import ActivePhone from "./phone_active";
import ColorChange from "./color_active";

const rootReducer = combineReducers({
  phones: UserInfo,
  active: ActivePhone,
  colorChange: ColorChange
});

export default rootReducer;
