import { createReducer } from 'redux-act';
import * as actions from '../action/action';




export const reducer = createReducer(function (on,action) {
  on(actions.increment, (state) => state + 1);
  on(actions.decrement, (state) => state - 1);
}, 0);

