import React from "react";
import { connect } from "react-redux";
// import styled from "styled-components";
// import { bindActionCreators } from "redux";
// import * as pageActions from "../action/action";
// import { getStateProps } from "../selectors/selectors";

class AuthorImg extends React.Component {
  // componentDidMount() {
  //   this.props.actions.increment();
  //   // console.log(this.props);
  // }

  render() {
    // return <h3>{this.props.elementAuthorImg}</h3>;
    return this.props.elementAuthorImg.map(trackList => {
      return (
        <React.Fragment key={trackList.id}>
          {/* <LI onClick={this.showAuthorImg.bind(this)}>{trackList.author}</LI> */}
          {/* <p>{trackList.cost}</p> */}
          <img src={trackList.imgURL} />
          {/* <AUDIO src={trackList.audioURL} controls /> */}
        </React.Fragment>
      );
    });
  }
}

const mapStateProps = state => ({
  elementAuthorImg: state.reducerTrackList
  //   element: getStateProps(state)
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(pageActions, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(AuthorImg);
