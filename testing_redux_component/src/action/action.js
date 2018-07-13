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
