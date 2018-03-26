import { createReducer } from "redux-act";
import { actionCreator } from "../action/action";

const defaultState = {
  // elemState: 0
  elemState: []
};

// export const reducerState = createReducer({}, defaultState);

// reducerState.on(actionCreator, (state, payload) => ({
//   ...state,
//   elemState: payload.id
// }));

// const defaultState = {
//   elemState: [] //нач состояние
// };

export const reducerState = function(state = defaultState, action) {
  switch (action.type) {
    case "ELEM_SHOW":
      return Object.assign({}, state, { elemState: action.payloadShow });
    case "ELEM_DELET":
      return Object.assign({}, state, { elemState: action.payloadDelete });
  }
  return state;
};
