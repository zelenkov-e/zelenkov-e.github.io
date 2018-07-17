import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";
import ButtonClear from "./ButtonClear";

const P = styled.p`
  display: ${props => (props.isVisible ? "block" : "none")};
`;

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>counter</h3>
        <P isVisible={this.props.colorTitle}>{this.props.counter}</P>
        <ButtonClear onClick={() => this.props.pageActions.clear()} />
      </div>
    );
  }
}

let mapStateProps = state => {
  return {
    counter: state.counterReducer,
    colorTitle: state.colorTitle
  };
};

let mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Counter);
