import { createReducer } from "redux-act";
// import { getMusicList } from "../action/action";
// import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

const defaultState = {
  trackList: "hello appMap!"
};

export const reducerList = createReducer({}, defaultState);

// reducerList.on(getMusicList, (state, payload) => ({
reducerList.on(state => ({
  // state
  ...state
  // trackList: payload.tracks
}));
