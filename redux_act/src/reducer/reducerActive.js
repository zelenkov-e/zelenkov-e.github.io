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
export const defaultState = {
  author: [],
  audio: null
};

export const reducerActive = createReducer({}, defaultState);

reducerActive.on(getTrackDetails, (state, payload) =>
  // console.log(payload),
  ({
    ...state,
    author: payload.imgURL,
    // author: payload
    audio: payload.audioURL
  })
);
