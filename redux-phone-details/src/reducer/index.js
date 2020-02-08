import { combineReducers } from "redux"
import UserInfo from "./info"
import ActivePhone from "./phone_active"

const rootReducer = combineReducers({
  phones:UserInfo,
  active:ActivePhone

})

export default rootReducer


