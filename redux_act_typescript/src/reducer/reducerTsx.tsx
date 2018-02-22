import * as React from "react";
import { createReducer } from "redux-act";
import { add } from "../action/action";
import { defaultState } from "../action/action";

export const reducerTsx = createReducer<typeof defaultState>({}, defaultState);

reducerTsx.on(add, (state) => ({
	...state,
	count: state.count + 5
}));