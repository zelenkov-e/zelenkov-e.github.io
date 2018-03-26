import React from "react";
import ComponentApp from "./componentApp";
import { connect } from "react-redux";
// import AuthorImg from "./authorImg";
// import styled from "styled-components";
// import { getTrackList } from "../action/action";
import * as pageActions from "../action/action";
// import { actionCreator } from "../action/action";
import { bindActionCreators } from "redux";
// import { getTrackActive } from "../action/action";

class ComponentButton extends React.Component {
  // componentDidMount() {
  //   this.props.showActionsList();
  // }
  showList() {
    return (
      <React.Fragment>
        <div>
          <button
            onClick={this.props.actions.actionCreator()}
            // onClick={this.props.showActionsList()}
          >
            button
          </button>
          {/* <hr /> */}
          {/* <p>{this.props.elementApp}</p> */}
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

// const mapStateToProps = state => ({
//   elementApp: state.reducerState
// });

// const matchDispatchToProps = dispatch => ({
//   showActionsList() {
//     dispatch(actionCreator());
//   }
// });

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(pageActions, dispatch)
});

// export default connect(mapStateToProps, matchDispatchToProps)(ComponentButton);
export default connect(matchDispatchToProps)(ComponentButton);
// export default connect(mapStateProps)(ComponentTrackList);
// export default ComponentButton;
