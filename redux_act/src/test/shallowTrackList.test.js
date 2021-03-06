import React from "react";
import { shallow } from "enzyme";
import ComponentTrackList from "../js/componentTrackList";
import { counterStore } from "../store/counterStore";

describe("ComponentTrackList", () => {
  it(" render my component", () => {
    const wrapper = shallow(<ComponentTrackList store={counterStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});
