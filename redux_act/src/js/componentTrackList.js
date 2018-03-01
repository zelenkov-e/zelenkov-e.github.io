import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import AuthorImg from "./authorImg";
import styled from "styled-components";
// import { getTrackList } from "../action/action";
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
  // componentDidMount() {
  // this.props.getTracks();
  //   // console.log(this.props);
  // }

  render() {
    const { elementTrackList } = this.props;

    // return (
    // <div>
    // <h3>{this.props.elementTrackList}</h3>
    // <button onClick={getTracks}>click</button>
    // </div>
    // );
    return elementTrackList.map(trackList => {
      return (
        <React.Fragment key={trackList.id}>
          <LI>
            <Link to="/author">{trackList.author}</Link>
          </LI>
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
// getTracks() {
// console.log("hi");
// dispatch(getTrackList());
// }
//   actions: bindActionCreators(pageActions, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(ComponentTrackList);
