import { createReducer } from "redux-act";
import { increment } from "../action/action";
// import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

// const defaultState = {
//  []
// };

// export const reducerList = createReducer({}, defaultState);

// reducerList.on(increment, (state, payload) => ({
// reducerList.on(state => ({
// state
//   ...state,
//   trackList: increment
// }));

export const reducerList = createReducer(
  {
    [increment]: state => state
    // [decrement]: (state) => state - 1,
    // [add]: (state, payload) => state + payload,
  },
  []
); // <-- This is the default state
