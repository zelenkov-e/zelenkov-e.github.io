import { createReducer } from "redux-act";
import { incrementTsx } from "../action/action";
<<<<<<< HEAD
// import { defaultState } from "../action/action";

export const defaultState = {
  count: 0
};
=======
>>>>>>> 7d6fd648f8b7df50efa9ce404f24d73ca6a16727

// interface ReduserState {
//   count: number;
// }

export const defaultState = {
  // export const defaultState: ReduserState = {
  count: 0
};

export const reducerTsx = createReducer({}, defaultState);

reducerTsx.on(incrementTsx, state => ({
  // reducerTsx.on(incrementTsx, (state: ReduserState) => ({
  ...state,
  count: state.count + 3
}));
