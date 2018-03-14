import React from "react";
import { connect } from "react-redux";
import styled, { keyframes }  from "styled-components";
import { getInfo } from "../action/action";

const DETAILS = styled.div`
  width: 268px;
  margin: 20px auto;
`;

const AUDIO = styled.audio`
  border: 2px solid red;
  width: 256px;
  margin-top: 15px;
`;
const IMAGE = styled.img`
  width: 260px;
`;


const TRANSFORM = keyframes`
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(-100%, 0);
  }
` ;



const DIVMARQUEE = styled.div`
  width: 256px;
  white-space: nowrap;
  overflow: hidden;
  border: 2px solid red;
`;
const SPAN = styled.span`
  color:#212121;
  display:inline-block;
  padding-left:100%;
  animation: ${TRANSFORM} 10s infinite linear;
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
                <DIVMARQUEE key={string.id}>
                <SPAN>  
                  {string.artistName} "{string.name}"
                </SPAN>
                </DIVMARQUEE>
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
