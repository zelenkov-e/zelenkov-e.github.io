import React from "react";
import { connect } from "react-redux";
// import AuthorImg from "./authorImg";
// import styled from "styled-components";
// import { getTrackList } from "../action/action";
// import { getTrackActive } from "../action/action";

class ComponentTrackList extends React.Component {
  // componentDidMount() {
  //   this.props.showActionsList();
  // }
  showList() {
    return (
      <React.Fragment>
        <div>
          <li>{this.props.elementTrackList.trackList}</li>
        </div>
        <hr />
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
//   },
//   selectTrackActive(id) {
//     dispatch(getTrackActive(id));
//   }
// });

// export default connect(mapStateProps, matchDispatchToProps)(ComponentTrackList);
export default connect(mapStateProps)(ComponentTrackList);
