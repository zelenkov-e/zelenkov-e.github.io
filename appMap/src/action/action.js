import { createAction } from "redux-act";

export const actionCreator = createAction('hi',()=>({
    id:1
}));
