import { createAction } from "redux-act";
import axios from "axios";

const musicURL =
  "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";

export const getTrackDetails = createAction();
export const getInfo = createAction("info");
export const getString = createAction("string");

export const getMusicList = createAction("GET_MUSIC_SUCCESS");

export function getTrackList() {
  return dispatch => {
    axios.get(musicURL).then(res => {
      return dispatch(getMusicList(res.data));
    });
  };
}
