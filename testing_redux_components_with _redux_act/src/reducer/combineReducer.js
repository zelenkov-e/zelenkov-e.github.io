import { combineReducers } from "redux";
import CounterReducer from "./conterReducer";
import buttonReducer from "./buttonReducer";
import buttonClearReducer from "./buttonClearReducer";
import visibleButtonReducer from "./visibleButtonReducer";

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
  buttonReducer: buttonReducer,
  buttonClearReducer: buttonClearReducer,
  clearTitle: visibleButtonReducer,
  showTitle: visibleButtonReducer
});

export default rootReducer;
