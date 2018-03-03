import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthorImg from "./authorImg";
import styled from "styled-components";
import { getTrackDetails } from "../action/action";
// import { action } from "../action/action";

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

class ComponentTrackList extends React.Component {
  // componentDidMount() {
  // this.props.getTracks();
  //   // console.log(this.props);
  // }
  showList() {
    const { elementTrackList } = this.props;

    return elementTrackList.map(trackList => {
      return (
        <React.Fragment key={trackList.id}>
          <div>
            {/* // <Li onClick = {()=> this.props.select(track)} key = {track.id}>{track.name}</Li> */}
            <LI>{trackList.author}</LI>
            <IMAGE src={trackList.imgURL} />
            <button onClick={() => this.props.select(trackList)}>play</button>

            {/* <AUDIO src={trackList.audioURL} controls /> */}
          </div>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <COMPONENT>
        <h3>tracks</h3>
        <hr />
        <ul>{this.showList()}</ul>
        <hr />
        <h3>details</h3>
        <AuthorImg />
      </COMPONENT>
    );
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
  //   element: getStateProps(state)
});

// const matchDispatchToProps = dispatch => ({
//   select() {
//     // console.log("hi");
//     dispatch(getTrackDetails);
//   }
// });
const matchDispatchToProps = dispatch => {
  return bindActionCreators({ select: getTrackDetails }, dispatch);
};

export default connect(mapStateProps, matchDispatchToProps)(ComponentTrackList);
// export default connect(mapStateProps)(ComponentTrackList);
