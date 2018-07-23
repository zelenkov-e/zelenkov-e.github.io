import React from "react";
import { connect } from "react-redux";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";
import styled from "styled-components";

const Container = styled.div`
  width: 50px;
`;

class ButtonClear extends React.Component {
  render() {
    return (
      <Container>
        <button onClick={() => this.props.pageActions.clear()}>clear</button>
        <button onClick={() => this.props.pageActions.show()}>show</button>
      </Container>
    );
  }
}

let mapStateProps = state => {
  return {
    button: state.buttonClearReducer
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
)(ButtonClear);
