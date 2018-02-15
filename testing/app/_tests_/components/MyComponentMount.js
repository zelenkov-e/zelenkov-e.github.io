import React from 'react';
import PropTypes from 'prop-types';

export  class MyComponentMount extends React.Component {
    render() {
      return <div><h3>hello!</h3></div>;
   
    }
  }
  


  MyComponentMount.propTypes = {
       name: PropTypes.string.isRequired,
  };