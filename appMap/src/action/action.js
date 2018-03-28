import { createAction } from "redux-act";
import React from "react";

// export const actionCreator = createAction("hi", () => ({
//   id: "on"
//   //   idDelete: "off"
// }));
// export const actionCreatorDelete = createAction("bye", () => ({
//   //   id: "on",
//   idDelete: "off"
// }));

export const actionCreator = () => {
  return {
    type: "ELEM_SHOW",
    payloadShow: "on"
  };
};
export const actionCreatorDelete = () => {
  return {
    type: "ELEM_DELET",
    payloadDelete: "off"
  };
};
// export const actionCreatorInput = () => {
//   return {
//     type: "ELEM_INPUT_SHOW",
//     payloadInputShow: []
//   };
// };
// export const actionCreatorInput = () => {
//   return {
//     type: "ELEM_DELET",
//     payloadInput: 1
//   };
// };var val = e.target.value;;
// export const actionCreatorInput = createAction("hi", () => ({
//   id: 1
// }));
export const actionCreatorInput = createAction();
