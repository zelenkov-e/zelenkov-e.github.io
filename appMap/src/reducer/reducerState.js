import { createReducer } from "redux-act";
import { actionCreator } from "../action/action";

// import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

const defaultState = {
  elemState: 0
};

export const reducerState = createReducer(
  {
    [actionCreator]: state => state
  },
  defaultState
);
