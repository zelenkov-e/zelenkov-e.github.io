//action creater
export const selectPhone = phone => {
  //   console.log("element list " + phone.model);
  return {
    type: "PHONE_SELECTED",
    payload: phone
  };
};
