//action creater
import { createAction } from "redux-act";

export const getTrackList = createAction("stateTrackList");
export const getTrackDetails = createAction();

// const increment = createAction();
// export const action = getTrackDetails(3);

// // console.log(getTrackDetails(1));
// export const action = getTrackDetails(3);
// console.log(action);
// console.log(action.payload);
// export function getTrackDetails(authorImg) {
//   //   console.log(authorImg.author);
//   return {
//     type: "SET_AUTHOR",
//     payload: authorImg
//    };
// }
