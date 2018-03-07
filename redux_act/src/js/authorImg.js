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
  width: 256px;
`;
const IMAGE = styled.img`
  width: 260px;
`;
const MARQUEE = styled.marquee`
  width: 256px;
  height: 20px;
  border: 2px solid red;
`;

class AuthorImg extends React.Component {
  render() {
    const { elementString } = this.props;
    // console.log(this.props.elementTrackList);

    if (!this.props.elementAuthor.audio) {
      return <p>select track..</p>;
    }

    return (
      <DETAILS>
        {/* {elementString.map(string => {
          return <MARQUEE key={tstring.id}>{string.author}</MARQUEE>;
          //   console.log(this.props.elementTrackList.author);
        })} */}

        <MARQUEE>{this.props.elementString.string}</MARQUEE>

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
  elementAuthor: state.reducerActiveAuthor,
  elementString: state.reducerString
});

const matchDispatchToProps = dispatch => ({
  selectInfo() {
    dispatch(getInfo());
    // console.log("hi");
  }
});

export default connect(mapStateProps, matchDispatchToProps)(AuthorImg);

// export default connect(mapStateProps)(AuthorImg);
