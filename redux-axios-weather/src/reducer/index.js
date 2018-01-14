import { combineReducers } from "redux"
import weatherReduserMain from "./infoMain"
import weatherReduserElements from "./infoElements"
import weatherReduserTemp from "./infoTemp"


const redusers = combineReducers({
	//нужно на каждое обращение к объекту,массиву res.data   - свой редюсер
    weatherElements:weatherReduserElements,
    weatherMain:weatherReduserMain,
    weatherTemp:weatherReduserTemp
    
})

export default redusers


