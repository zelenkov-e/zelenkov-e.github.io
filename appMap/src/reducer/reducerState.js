import { createReducer } from "redux-act";
import { actionCreator } from "../action/action";

// import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

// const defaultState = {
//   elemState: 0
// };

// export const reducerState = createReducer(
//   {
//     [actionCreator]: (state, payload) => state + payload
//   },
//   defaultState
// );
export const reducerState = createReducer(function(on, off) {
  on(actionCreator, state => state + 1);
  // on(add, (state, payload) => state + payload);
  // 'off' remove support for a specific action
  // See 'Adding and removing actions' section
}, 0);
