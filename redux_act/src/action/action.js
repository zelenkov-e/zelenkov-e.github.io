//action creater
import { createAction } from 'redux-act';



<<<<<<< HEAD
export const increment = createAction('Increment counter');
export const decrement = createAction('Decrement counter');


export function incrementIfOdd() {
    return (dispatch, getState) => {
      const { counter } = getState();
  
      if (counter % 2 === 0) {
        return;
      }
  
      dispatch(increment());
    };
  }
  
  export function incrementAsync() {
    return dispatch => {
      setTimeout(() => {
        dispatch(increment());
      }, 1000);
    };
  }
=======
 export const increment = createAction('increment');

//  export const decrement = createAction('decrement', (payload) => ({ payload }));



>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28

