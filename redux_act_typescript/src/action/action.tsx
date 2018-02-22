import * as React from "react";
import { createAction } from "redux-act";

export const defaultState = {
	count: 0
};

export const add = createAction<number>('Increase count');