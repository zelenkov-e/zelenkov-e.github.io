import React from "react";
import { connect } from "react-redux";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";

class ButtonClear extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.pageActions.clearCount()}>
        clear count
      </button>
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
)(ButtonClear);
