import { createReducer } from "redux-act";
import { actionCreatorInput } from "../action/action";

const defaultState = {
  // elemState: 0
  elemState: []
};

export const reducerDataInput = createReducer({}, defaultState);

reducerDataInput.on(actionCreatorInput, (state, payload) => ({
  ...state,
  elemState: payload
}));
