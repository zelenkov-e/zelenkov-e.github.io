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

const IMAGE = styled.img`
  width: 36px;
`;

const UL = styled.ul`
  background: gainsboro;
`;

// const Details = styled.details`
//   background: gainsboro;
// `;

// const AUDIO = styled.audio`
//   border: 2px solid;
// `;

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
          {/* // <Li onClick = {()=> this.props.select(track)} key = {track.id}>{track.name}</Li> */}
          <LI>{trackList.author}</LI>
          <button onClick={() => this.props.select(trackList)}>play</button>
          <IMAGE src={trackList.imgURL} />
          {/* <AUDIO src={trackList.audioURL} controls /> */}
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="details">
        <h3>tracks</h3>
        <hr />
        <UL>{this.showList()}</UL>
        <hr />
        <h3>details</h3>
        <AuthorImg />
      </div>
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
