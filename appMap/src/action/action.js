import { createAction } from "redux-act";

// const classApp = () ?  :  ;
// var containerApp = "containerApp";

// export const actionCreator = createAction("hi", () => ({
//   id: "on"
//   //   idDelete: "off"
// }));
// export const actionCreatorDelete = createAction("bye", () => ({
//   //   id: "on",
//   idDelete: "off"
// }));

export const actionCreator = phone => {
  return {
    type: "ELEM_SHOW",
    payloadShow: "on"
  };
};
export const actionCreatorDelete = phone => {
  return {
    type: "ELEM_DELET",
    payloadDelete: "off"
  };
  // {
  //   type: "ELEM_DELET",
  //   payloadDelete: "off"
  // }
};
