//action creater
import { createAction } from "redux-act";
import {
  GET_MUSIC_REQUEST,
  GET_MUSIC_SUCCESS,
  musicURL
} from "../constants/infoConstants";
import axios from "axios";

// export const getTrackList = createAction("stateTrackList");
export const getTrackDetails = createAction();
export const getInfo = createAction("info");
export const getString = createAction("string");
// export const getString = createAction("info", id => ({ id: 2 }));

export function getTrackList() {
  return dispatch => {
    dispatch({
      type: GET_MUSIC_REQUEST
    });

    axios.get(musicURL).then(res => {
      return dispatch({
        type: GET_MUSIC_SUCCESS,
        payloadtMusic: res.data
      });
    });
  };
}
