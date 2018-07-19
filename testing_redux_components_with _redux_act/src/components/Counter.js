import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";
import ButtonClear from "./ButtonClear";

const Container = styled.div`
  width: 200px;
  border: 1px solid;
  display: ${props => (!props.isVisible ? "block" : "none")};
`;

const H1 = styled.h1`
  color: pink;
`;

class Counter extends React.Component {
  render() {
    return (
      <Container>
        <h3>counter</h3>
        <H1 isVisible={this.props.clearCount}>{this.props.counter}</H1>
        {/* <ButtonClear onClick={() => this.props.pageActions.clear()} /> */}
      </Container>
    );
  }
}

let mapStateProps = state => {
  return {
    counter: state.counterReducer,
    clearCount: state.clearTitle
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     pageActions: bindActionCreators(pageActions, dispatch)
//   };
// };

export default connect(
  mapStateProps
  // mapDispatchToProps
)(Counter);
