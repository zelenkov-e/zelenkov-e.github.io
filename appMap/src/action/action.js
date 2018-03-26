import { createAction } from "redux-act";

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
