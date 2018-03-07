import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import InfoComponent from "./infoComponent";
// import { getInfo } from "../action/action";

// import * as pageActions from "../action/action";
// import { getStateProps } from "../selectors/selectors";
// const Details = styled.details`
//   background: gainsboro;
// `;

const DETAILS = styled.div`
  width: 268px;
  margin: 20px auto;
`;

const AUDIO = styled.audio`
  border: 2px solid red;
  width: 268px;
`;
const IMAGE = styled.img`
  width: 268px;
`;

class AuthorImg extends React.Component {
  render() {
    // console.log(this.props.elementAuthor.author);
    if (!this.props.elementAuthor.audio) {
      return <p>select track..</p>;
    }
    return (
      <DETAILS>
        {/* <h3>{this.props.elementAuthor.author}</h3> */}
        <IMAGE src={this.props.elementAuthor.author} />
        <AUDIO src={this.props.elementAuthor.audio} controls />
        {/* <img src={this.props.elementAuthorImg.audioURL} /> */}
        {/* <button */}
        {/* onClick={this.props.selectInfo()} */}
        {/* > */}
        {/* info */}
        {/* </button> */}
        {/* <h3>information</h3> */}
        {/* <InfoComponent /> */}
      </DETAILS>
    );
  }
}

const mapStateProps = state => ({
  elementAuthor: state.reducerActiveAuthor
});

const matchDispatchToProps = dispatch => ({
  selectInfo() {
    dispatch(getInfo());
    // console.log("hi");
  }
});

export default connect(mapStateProps, matchDispatchToProps)(AuthorImg);

// export default connect(mapStateProps)(AuthorImg);
