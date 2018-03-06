import { createReducer } from "redux-act";
import { getTrackDetails } from "../action/action";

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
