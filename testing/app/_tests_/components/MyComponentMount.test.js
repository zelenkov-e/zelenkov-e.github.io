import React from 'react';
import { mount } from 'enzyme';
import { MyComponentMount } from './MyComponentMount';



describe("MyComponentMount", () => {
    it(" allows us to set props", () => {
      const wrapper = mount(<MyComponentMount name = "Zhenya" />);
    //   expect(wrapper.props().name).toEqual('Zhenya');
      expect(wrapper.props().name).toMatchSnapshot();
    //   wrapper.setProps({name:'Zhenya'});
    //   expect(wrapper.props().name).to.equal('Zhenya')
    });
  });

// 