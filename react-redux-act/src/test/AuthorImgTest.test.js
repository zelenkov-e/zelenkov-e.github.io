import React from "react";
import { shallow } from "enzyme";
import AuthorImg from "../js/authorImg";
import { counterStore } from "../store/counterStore";

describe("AuthorImg", () => {
  it(" render my component", () => {
    const wrapper = shallow(<AuthorImg store={counterStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});
