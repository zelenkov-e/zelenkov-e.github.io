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
//   count: null
// };

// export const reducerActive = createReducer({}, defaultState);

// reducerActive.on(getTrackDetails, (state, payload) => ({
//   ...state,
//   count: payload
// }));

export const reducerActive = createReducer(function(on) {
    // on(action, state => state + payload);
  on(getTrackDetails, (state,payload) =>{ 
  console.log(state+payload.id)
  // console.log(payload.id)
  // state + payload.id
  // payload.id
});
}, 0);

// export const reducerActive = createReducer({
//   count: (state, payload) => state + payload
// });
