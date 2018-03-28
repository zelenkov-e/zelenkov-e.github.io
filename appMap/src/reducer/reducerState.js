import { createReducer } from "redux-act";
import { actionCreator } from "../action/action";

const defaultState = {
  // elemState: 0
  elemState: []
};

// export const reducerState = createReducer({}, defaultState);

// reducerState.on(actionCreator,actionCreatorDelete (state, payloadShow,payloadDelete) => ({
//   ...state,
//   elemState: payload.id
// }));

export const reducerState = function(state = defaultState, action) {
  switch (action.type) {
    case "ELEM_SHOW":
      return Object.assign({}, state, { elemState: action.payloadShow });
    case "ELEM_DELET":
      return Object.assign({}, state, { elemState: action.payloadDelete });
    // case "ELEM_RED":
    //   return Object.assign({}, state, { elemState: action.payloadRepaintRed });
    // case "ELEM_BLUE":
    //   return Object.assign({}, state, { elemState: action.payloadRepaintBlue });
  }
  return state;
};
