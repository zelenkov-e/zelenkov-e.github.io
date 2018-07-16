export const selectPhone = phone => {
  return {
    type: "PHONE_SELECTED",
    payload: phone
  };
};

export const selectColor = () => {
  return {
    type: "CHANGE_COLOR",
    payload: true
  };
};

// let one = 1;
export const selectCount = () => {
  return {
    type: "CHANGE_COUNT",
    payload: 1
  };
};
