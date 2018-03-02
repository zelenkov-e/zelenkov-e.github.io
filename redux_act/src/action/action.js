//action creater
import { createAction } from "redux-act";

export const getTrackList = createAction("stateTrackList");
export const getTrackDetails = createAction("SET_TRACK");

// const increment = createAction();
// export const action = increment(3);

// // console.log(getTrackDetails(1));
// export const action = getTrackDetails(3);
// console.log(action);
// export function getTrackDetails(authorImg) {
//   //   console.log(authorImg.author);
//   return {
//     type: "SET_AUTHOR",
//     payload: authorImg
//    };
// }
