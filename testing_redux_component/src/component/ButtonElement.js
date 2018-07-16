import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";

const Container = styled.div`
  width: 200px;
  border: 1px solid;
`;

class ButtonElement extends React.Component {
  render() {
    return (
      <Container>
        <p>second container</p>
        <button onClick={() => this.props.pageActions.selectCount()}>
          click
        </button>
      </Container>
    );
  }
}

let mapStateProps = state => {
  return {
    button: state.button
  };
};

let matchDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(
  mapStateProps,
  matchDispatchToProps
)(ButtonElement);
