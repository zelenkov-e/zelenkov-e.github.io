//action creater
import { createAction } from "redux-act";

export const getTrackList = createAction("stateTrackList");
// export const getTrackDetails = createAction();


let authorImg;
export const getTrackDetails = createAction('SET_AUTHOR',( id )=>({id:5}) );
// console.log(getTrackDetails(1));

// export function getTrackDetails(authorImg) {
//   //   console.log(authorImg.author);
//   return {
//     type: "SET_AUTHOR",
//     payload: authorImg
//   };
// }
