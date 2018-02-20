import { createReducer } from 'redux-act';
import { increment } from '../action/action';




export const reducer = createReducer(function (on) {
  on(increment, (state) => state + 1);
}, 0);

