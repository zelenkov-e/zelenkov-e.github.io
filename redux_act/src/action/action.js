//action creater
import { createAction } from 'redux-act';



export const increment = createAction('increment');




export const increment = createAction("increment");
export const decrement = createAction("decrement", payload => payload);
