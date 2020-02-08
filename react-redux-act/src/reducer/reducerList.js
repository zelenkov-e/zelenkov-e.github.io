import { createReducer } from "redux-act";
import { getMusicList } from "../action/action";
// import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

const defaultState = {
  trackList: []
};

export const reducerList = createReducer({}, defaultState);

reducerList.on(getMusicList, (state, payload) => ({
  ...state,
  trackList: payload.tracks
}));
