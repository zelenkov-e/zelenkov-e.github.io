import React from "react";
import { connect } from "react-redux";
// import AuthorImg from "./authorImg";
// import styled from "styled-components";
// import { getTrackList } from "../action/action";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";
// import { getTrackActive } from "../action/action";

class ComponentTrackList extends React.Component {
  // componentDidMount() {
  //   this.props.showActionsList();
  // }
  showList() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.props.actions.increment}>button</button>
          <hr />
          <li>{this.props.elementTrackList}</li>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return <ul>{this.showList()}</ul>;
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
});

// const matchDispatchToProps = dispatch => ({
//   showActionsList() {
//     dispatch(getTrackList());
//   }
// });

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(pageActions, dispatch)
});

export default connect(mapStateProps, matchDispatchToProps)(ComponentTrackList);
// export default connect(mapStateProps)(ComponentTrackList);
