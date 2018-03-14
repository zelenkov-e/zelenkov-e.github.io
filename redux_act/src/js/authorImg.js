import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getInfo } from "../action/action";

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
    const { elementActiveTrack } = this.props;
    return elementActiveTrack.activeTrack.map(trackList => {
      if (!trackList.previewURL) {
        return <p>select another track ..</p>;
      }

      return (
        <React.Fragment key={trackList.id}>
          <DETAILS>
            <p>{trackList.artistName}</p>
            {elementString.string.map(string => {
              return (
                <MARQUEE key={string.id}>
                  {string.artistName} "{string.name}"
                </MARQUEE>
              );
            })}
            <AUDIO key={trackList.id} src={trackList.previewURL} controls />
          </DETAILS>
        </React.Fragment>
      );
    });
  }
}

const mapStateProps = state => ({
  elementActiveTrack: state.reducerActiveAuthor,
  elementString: state.reducerString
});

export default connect(mapStateProps)(AuthorImg);
