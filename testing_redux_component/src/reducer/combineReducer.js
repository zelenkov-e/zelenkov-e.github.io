import { combineReducers } from "redux";
import UserInfo from "./info";
import ActivePhone from "./phone_active";
import ColorChange from "./color_active";
import CountChange from "./count_change";
import ButtonReducer from "./buttonReducer";

const rootReducer = combineReducers({
  phones: UserInfo,
  active: ActivePhone,
  colorChange: ColorChange,
  count: CountChange,
  button: ButtonReducer
});

export default rootReducer;
