import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './MyComponent';
import { shallowToJson  } from 'enzyme-to-json';



describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<MyComponent />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});