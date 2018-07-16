// let CountChange = function(state = 0, action) {
//   switch (action.type) {
//     case "CHANGE_COUNT":
//       return state + 1;
//   }
//   return state;
// };

// export default CountChange;

export default function(state = 0, action) {
  switch (action.type) {
    case "CHANGE_COUNT":
      return state + action.payload;
      break;
    default:
      return state;
  }
}
