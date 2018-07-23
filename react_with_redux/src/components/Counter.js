import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";
import ButtonClear from "./ButtonClear";

const Container = styled.div`
  display: ${props => (props.isVisible ? "block" : "none")};
  display: ${props => (props.showCount ? "block" : "none")};
`;

const H1 = styled.h1`
  color: pink;
`;

const Counter = props => {
  return (
    <Container isVisible={props.clearCount} showCount={props.showCount}>
      <H1>{props.counter}</H1>
    </Container>
  );
};

let mapStateProps = state => {
  return {
    counter: state.counterReducer,
    clearCount: state.clearReducer,
    showCount: state.showReducer
  };
};

export default connect(mapStateProps)(Counter);
