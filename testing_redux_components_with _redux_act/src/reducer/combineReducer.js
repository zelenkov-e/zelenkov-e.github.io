import { combineReducers } from "redux";
import CounterReducer from "./conterReducer";
import buttonReducer from "./buttonReducer";
import colorReducer from "./colorReducer";

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
  buttonReducer: buttonReducer,
  colorTitle: colorReducer
});

export default rootReducer;
