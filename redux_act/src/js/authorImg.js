import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// import * as pageActions from "../action/action";
// import { getStateProps } from "../selectors/selectors";
// const Details = styled.details`
//   background: gainsboro;
// `;

const AUDIO = styled.audio`
  border: 2px solid red;
`;
const IMAGE = styled.img`
  width: 300px;
`;

class AuthorImg extends React.Component {
  render() {
    // console.log(this.props.elementAuthor.author);
    if (!this.props.elementAuthor.audio) {
      return <p>select track..</p>;
    }
    return (
      <div>
        {/* <h3>{this.props.elementAuthor.count}</h3> */}
        <IMAGE src={this.props.elementAuthor.author} />
        <AUDIO src={this.props.elementAuthor.audio} controls />
        {/* <img src={this.props.elementAuthorImg.audioURL} /> */}
      </div>
    );
  }
}

const mapStateProps = state => ({
  elementAuthor: state.reducerActiveAuthor
});

export default connect(mapStateProps)(AuthorImg);
