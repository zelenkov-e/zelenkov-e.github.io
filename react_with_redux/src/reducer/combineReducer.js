import { combineReducers } from "redux";
import CounterReducer from "./conterReducer";
import buttonReducer from "./buttonReducer";
import contentReducer from "./contentReducer";
import visibleButtonReducer from "./visibleButtonReducer";
import optionElementReducer from "./optionElementReducer";
// import optionElementReducerColor from "./optionElementReducerColor";

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
  buttonReducer: buttonReducer,
  contentReducer: contentReducer,
  clearReducer: visibleButtonReducer,
  showReducer: visibleButtonReducer,
  optionElementReducer: optionElementReducer
  // optionElementReducerColor: optionElementReducerColor
});

export default rootReducer;
