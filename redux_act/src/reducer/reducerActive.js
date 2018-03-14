import { createReducer } from "redux-act";
import { getTest } from "../action/action";
import { getMusicList } from "../action/action";

export const defaultState = {
  // author: 0
  author: []
  // audio: null
};

export const reducerActive = createReducer({}, defaultState);

reducerActive.on(
  // getTest,
  // getTrackList,
  getMusicList,
  // getTest,
  (state, payload) => (
    // console.log(payload.id),
    console.log(payload.tracks),
    {
      ...state,
      author: payload.tracks
      // author: payload.id
      // audio: payload.audioURL
    }
  )
);
