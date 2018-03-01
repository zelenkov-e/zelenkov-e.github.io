import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import { bindActionCreators } from "redux";
// import * as pageActions from "../action/action";
// import { getStateProps } from "../selectors/selectors";

const IMAGE = styled.img`
  width: 36px;
`;
const AUDIO = styled.audio`
  border: 2px solid;
`;

const LI = styled.li`
  color: red;
  list-style-type: none;
`;

class ComponentTrackList extends React.Component {
  showAuthorImg(e) {}

  // componentDidMount() {
  //   this.props.actions.increment();
  //   // console.log(this.props);
  // }

  render() {
    // return <h3>{this.props.elementTrackList}</h3>;
    return this.props.elementTrackList.map(trackList => {
      return (
        <React.Fragment key={trackList.id}>
          <LI onClick={this.showAuthorImg.bind(this)}>{trackList.author}</LI>
          {/* <p>{trackList.cost}</p> */}
          <IMAGE src={trackList.imgURL} />
          <AUDIO src={trackList.audioURL} controls />
        </React.Fragment>
      );
    });
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
  //   element: getStateProps(state)
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(pageActions, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(ComponentTrackList);
