import React from "react";
import ComponentApp from "./componentApp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../action/action";

class ComponentButton extends React.Component {
  showList() {
    return (
      <React.Fragment>
        <div>
          <button
          onClick = {()=>this.props.showActionsList()}
          >
            button
          </button>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <div>{this.showList()}</div>
        <hr />
        <ComponentApp />
      </div>
    );
  }
}


const matchDispatchToProps = dispatch => ({
  showActionsList() {
    dispatch(actionCreator());
  }
});


export default connect(null,matchDispatchToProps)(ComponentButton);

