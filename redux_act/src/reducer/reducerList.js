import { createReducer } from "redux-act";
import { getMusicList } from "../action/action";

const initialState = {
  music: []
};

export const reducerList = createReducer({}, initialState);

reducerList.on(getMusicList, (state, payload) =>
  // console.log(payload.tracks),
  ({
    ...state,
    music: payload.tracks
  })
);
