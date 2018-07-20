import React from "react";
import { connect } from "react-redux";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";
import styled from "styled-components";

const Container = styled.div``;

class Button extends React.Component {
  render() {
    return (
      <Container>
        <h3>button</h3>
        {/* <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button> */}
        <button onClick={this.props.pageActions.increment}>+</button>
        <button onClick={this.props.pageActions.decrement}>-</button>
      </Container>
    );
  }
}

let mapStateProps = state => {
  return {
    button: state.buttonReducer
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
)(Button);
