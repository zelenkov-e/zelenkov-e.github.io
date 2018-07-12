import { combineReducers } from "redux";
import UserInfo from "./info";
import ColorInfo from "./colorInfo";
import ActivePhone from "./phone_active";

const rootReducer = combineReducers({
  phones: UserInfo,
  active: ActivePhone,
  colorTitle: ColorInfo
});

export default rootReducer;
