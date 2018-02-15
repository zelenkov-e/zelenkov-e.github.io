import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './MyComponent';
// import { shallowToJson  } from 'enzyme-to-json';



describe("MyComponent", () => {
  it(" render my component", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});