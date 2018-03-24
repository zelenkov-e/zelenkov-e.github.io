import { createReducer } from "redux-act";
import { actionCreator } from "../action/action";


const defaultState = {
  elemState: 0
};

export const reducerState = createReducer({}, defaultState);

reducerState.on(actionCreator, (state, payload) => ({
  ...state,
  elemState: payload.id
}));