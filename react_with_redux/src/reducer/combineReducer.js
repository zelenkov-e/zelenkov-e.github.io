import { combineReducers } from "redux";
import CounterReducer from "./conterReducer";
import buttonReducer from "./buttonReducer";
import contentReducer from "./contentReducer";
import visibleButtonReducer from "./visibleButtonReducer";
import optionElementReducer from "./optionElementReducer";
import colorElementReducer from "./colorElementReducer";

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
  buttonReducer: buttonReducer,
  contentReducer: contentReducer,
  clearReducer: visibleButtonReducer,
  showReducer: visibleButtonReducer,
  optionElementReducer: optionElementReducer,
  colorElementReducer: colorElementReducer
});

export default rootReducer;
