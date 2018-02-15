import React from 'react';
import { shallow } from 'enzyme';
import { MyComponentShallow } from './MyComponentShallow';

// import { shallowToJson  } from 'enzyme-to-json';



describe("MyComponentShallow", () => {
  it(" render my component", () => {
    const wrapper = shallow(<MyComponentShallow />);
    expect(wrapper).toMatchSnapshot();
  });
});