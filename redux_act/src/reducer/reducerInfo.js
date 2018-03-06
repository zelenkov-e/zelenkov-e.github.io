import { createReducer } from "redux-act";
import { getInfo } from "../action/action";

export const defaultState = {
  info: 0
  //   audio: null
};

// export const reducerInfo = createReducer({}, defaultState);

// reducerActive.on(getTrackDetails, (state, payload) =>
// reducerInfo.on(getInfo, state => state);
// console.log(payload),
//   ({
//     ...state,
//     author: payload.imgInfo
//     // author: payload
//     // audio: payload.audioURL
//   })
// ;
export const reducerInfo = createReducer(function(on) {
  on(getInfo, state => state);
}, defaultState);
