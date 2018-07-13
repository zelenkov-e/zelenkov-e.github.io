let ColorChange = function(state = false, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return action.payload;
      break;
    default:
      return state;
  }
};

export default ColorChange;
