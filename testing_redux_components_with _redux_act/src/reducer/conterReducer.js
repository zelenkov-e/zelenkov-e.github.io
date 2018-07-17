import { createReducer } from "redux-act";
import { increment, decrement, clear } from "../action/action";

// let CounterReducer = (state = 1) => state;
// export default CounterReducer;

// OBJECT NOTATION -
// const counterReducer = createReducer(
//   {
//     //СРАВНИ С ACTION ( type ) = increment
//     //ОБЯЗАТЕЛЬНО ПЕРЕДАТЬ ACTION
//     [increment]: state => state + 1,
//     [decrement]: state => state - 1
//   },
//   // 0 - НАЧ СОСТОЯНИЕ
//   0
// );
// export default counterReducer;
// const action = increment(1);

// FUNCTION NOTATION -
const counterReducer = createReducer(on => {
  on(increment, state => state + 1);
  on(decrement, state => state - 1);
  //   on(clear, state => true);
  // on(decrement, (state, payload) => state + payload);
}, 0);

export default counterReducer;
