import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthorImg from "./authorImg";
// import InfoComponent from "./infoComponent";
import styled from "styled-components";
import { getTrackDetails } from "../action/action";
// import { action } from "../action/action";
import InfoComponent from "./infoComponent";
import { getInfo } from "../action/action";
import { getString } from "../action/action";

import { bindActionCreators } from "redux";
// import { getTrackList } from "../action/action";
// import { getStateProps } from "../selectors/selectors";

const COMPONENT = styled.div`
  width: 328px;
`;

const IMAGE = styled.img`
  width: 36px;
`;

const LI = styled.li`
  color: red;
  list-style-type: none;
`;

const COMPONENTSCROLL = styled.div`
  overflow-y: scroll;
  margin: 20px auto;
  border: 1px solid;
  width: 256px;
  height: 117px;
`;

const UL = styled.ul`
  margin: 4px;
  padding: 12px;
`;

class ComponentTrackList extends React.Component {
  // componentDidMount() {
  //   this.props.select();
  //   // console.log(this.props);
  // }
  showList() {
    const { elementTrackList } = this.props;

    return elementTrackList.map(trackList => {
      return (
        <React.Fragment key={trackList.id}>
          <div>
            <LI>{trackList.author}</LI>
            <IMAGE src={trackList.imgURL} />
            <button
              onClick={
                () => this.props.select(trackList)
                //  this.props.selectString();
              }
            >
              play
            </button>
            <button onClick={() => this.props.selectInfo(trackList)}>
              info
            </button>
          </div>
          <hr />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <COMPONENT>
        {/* <h3>tracks</h3> */}
        {/* <hr /> */}
        <COMPONENTSCROLL>
          <UL>{this.showList()}</UL>
        </COMPONENTSCROLL>
        {/* <hr /> */}
        {/* <h3>details</h3> */}
        <AuthorImg />
        {/* <button onClick={this.props.info}>info</button> */}
        {/* <hr /> */}
        <InfoComponent />
      </COMPONENT>
    );
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
  //   element: getStateProps(state)
});

const matchDispatchToProps = dispatch => ({
  select(trackList) {
    dispatch(getTrackDetails(trackList));
    dispatch(getString(trackList));
    // console.log("hi");
  },
  selectInfo(trackList) {
    dispatch(getInfo(trackList));
    // console.log("hi");
  }
  // selectString() {
  //   dispatch(getString());
  //   // console.log("hi");
  // }
});

// const matchDispatchToProps = dispatch => {
//   return bindActionCreators({ select: getTrackDetails }, dispatch);
// };

export default connect(mapStateProps, matchDispatchToProps)(ComponentTrackList);
// export default connect(mapStateProps)(ComponentTrackList);
