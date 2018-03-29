import { createAction } from "redux-act";
import React from "react";

export const actionCreatorShow = createAction("ELEM_SHOW", id => ({
  id: "on"
}));
export const actionCreatorDelete = createAction("ELEM_DELET", id => ({
  id: "off"
}));

export const actionCreatorInput = createAction();
