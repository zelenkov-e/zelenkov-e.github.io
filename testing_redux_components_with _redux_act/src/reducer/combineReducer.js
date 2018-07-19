import { combineReducers } from "redux";
import CounterReducer from "./conterReducer";
import buttonReducer from "./buttonReducer";
import clearButtonReducer from "./clearButtonReducer";

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
  buttonReducer: buttonReducer,
  clearTitle: clearButtonReducer
});

export default rootReducer;
