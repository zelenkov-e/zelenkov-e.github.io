import { createReducer } from "redux-act";
import { increment } from "../action/action_act";

// export const ReducerAct = createReducer({}, 1).on(
//   increment,
//   state => state * 2
// );

// export const reducerAct = createReducer({}, 1);
// reducerAct.on(increment, (state, payload) => payload);

export const reducerAct = createReducer(
  {
    [increment]: state => state + 1
  },
  0
);
