import { createReducer } from "redux-act";
import { getTrackDetails } from "../action/action";
// import { action } from "../action/action";
// import { createAction } from "redux-act";

// export default function(state = [], action) {
//   switch (action.type) {
//     case "SET_AUTHOR":
//       return action.payload;
//       break;
//     default:
//       return state;
//   }
// }
// export const defaultState = {
//   count: 0
// };

// export const reducerActive = createReducer({}, defaultState);

// reducerActive.on(action, (state, payload) => ({
//   ...state,
//   count: state.count + payload
// }));

export const reducerActive = createReducer(function(on) {
  //   on(action, state => state + payload);
  on(getTrackDetails, state => state + 1);
}, 0);

// export const reducerActive = createReducer({
//   count: (state, payload) => state + payload
// });
