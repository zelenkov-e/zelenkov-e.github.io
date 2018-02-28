import { createReducer } from "redux-act";
import { incrementTsx } from "../action/action";

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
