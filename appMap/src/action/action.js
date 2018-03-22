import { createAction } from "redux-act";
// import axios from "axios";

// const musicURL =
//   "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";

// export const getMusicList = createAction("GET_MUSIC_LIST");
// export const getMusicActive = createAction("GET_MUSIC_ACTIVE");
export const increment = createAction("hello!");
// export function getTrackList() {
//   return dispatch => {
//     axios.get(musicURL).then(res => {
//       return dispatch(getMusicList(res.data));
//     });
//   };
// }
// export function getTrackActive(id) {
//   return dispatch => {
//     axios.get(musicURL).then(res => {
//       const result = res.data.tracks.filter(item => item.id === id);
//       return dispatch(
//         getMusicActive({
//           tracks: result
//         })
//       );
//     });
//   };
// }
