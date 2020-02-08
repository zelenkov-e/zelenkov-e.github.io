import { createReducer } from "redux-act";
import { getInfo } from "../action/action";

export const defaultState = {
  info: []
  //   audio: null
};

export const reducerInfo = createReducer({}, defaultState);

reducerInfo.on(getInfo, (state, payload) =>
  // reducerInfo.on(getInfo, state => state);
  // console.log(payload),
  ({
    ...state,
    info: payload.Info
    // info: payload.id
    // author: payload
    // audio: payload.audioURL
  })
);
// export const reducerInfo = createReducer(function(on) {
//   on(getInfo, state => state);
// }, defaultState);
