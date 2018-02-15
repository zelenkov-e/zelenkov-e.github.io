import { combineReducers } from "redux"
import { reducer } from "./reducerAct"

const rootReducer = combineReducers({
  reducerAdd: reducer,
 })

export default rootReducer


