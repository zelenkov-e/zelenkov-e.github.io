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
  // componentDidMount() {
  //   this.props.actions.increment();
  //   // console.log(this.props);
  // }

  render() {
    // if (!this.props.elementAuthor.audioURL) {
    //   return <p>select track..</p>;
    // }
    return (
      <div>
        <h3>{this.props.elementAuthor}</h3>
        {/* <IMAGE src={this.props.elementAuthor.imgURL} /> */}
        {/* <AUDIO src={this.props.elementAuthor.audioURL} controls /> */}
        {/* <img src={this.props.elementAuthorImg.audioURL} /> */}
      </div>
    );
  }
}

const mapStateProps = state => ({
  elementAuthor: state.reducerActiveAuthor
  //   element: getStateProps(state)
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(pageActions, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(AuthorImg);
