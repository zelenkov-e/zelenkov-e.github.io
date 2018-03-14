import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const INFO = styled.div`
  width: 294px;
  margin: 20px;
`;

class InfoComponent extends React.Component {
  render() {
    return (
      <INFO>
        <p>{this.props.elementInfo}</p>
        {/* <IMAGE src={this.props.elementAuthor.author} />
        <AUDIO src={this.props.elementAuthor.audio} controls />
        <img src={this.props.elementAuthorImg.audioURL} /> */}
      </INFO>
    );
  }
}

// const matchDispatchToProps = dispatch => ({
//   info() {
//     // dispatch(getTrackDetails());
//     console.log("hi");
//   }
// });

const mapStateProps = state => ({
  elementInfo: state.reducerInfo.info
});

export default connect(mapStateProps)(InfoComponent);
