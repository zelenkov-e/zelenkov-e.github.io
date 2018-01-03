import { combineReducers } from "redux"
import weatherReduser from "./info"


const redusers = combineReducers({
    weatherState:weatherReduser,
})

export default redusers


