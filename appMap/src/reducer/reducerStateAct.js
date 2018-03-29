import { createReducer } from "redux-act";
import { actionCreatorShow, actionCreatorDelete } from "../action/action";

const defaultState = {
  elemState: []
};

export const reducerState = createReducer({}, defaultState);

reducerState
  .on(actionCreatorShow, (state, payload) => ({
    ...state,
    elemState: payload.id
  }))
  .on(actionCreatorDelete, (state, payload) => ({
    ...state,
    elemState: payload.id
  }));
