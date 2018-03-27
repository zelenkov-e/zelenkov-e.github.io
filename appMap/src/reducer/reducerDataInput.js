import { createReducer } from "redux-act";
import { actionCreatorInput } from "../action/action";

const defaultState = {
  // elemState: 0
  elemState: []
};

// export const reducerDeleteApp = createReducer({}, defaultState);
export const reducerDataInput = createReducer({}, defaultState);

reducerDataInput.on(actionCreatorInput, (state, payload) => ({
  // reducerDataInput.on(state => ({
  ...state,
  // elemState: payload.id
  elemState: payload
}));
