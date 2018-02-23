import { createReducer } from "redux-act";
import { incrementTsx } from "../action/action";
import { defaultState } from "../action/action";

export const reducerTsx = createReducer<typeof defaultState>({}, defaultState);

reducerTsx.on(incrementTsx, state => ({
  ...state,
  count: state.count + 3
}));
