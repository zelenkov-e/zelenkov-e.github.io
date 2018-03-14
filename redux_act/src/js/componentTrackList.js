import React from "react";
import { connect } from "react-redux";
import AuthorImg from "./authorImg";
import styled from "styled-components";
import { getTrackList } from "../action/action";
import { getTrackActive } from "../action/action";

const COMPONENT = styled.div`
  width: 328px;
`;

const LI = styled.li`
  color: red;
  list-style-type: none;
  float: left;
`;

const COMPONENTSCROLL = styled.div`
  overflow-y: scroll;
  margin: 20px auto;
  border: 1px solid;
  width: 256px;
  height: 117px;
`;

const UL = styled.ul`
  margin: 4px;
  padding: 12px;
`;
const P = styled.p`
  font-size: 12px;
  margin-left: 38px;
`;

class ComponentTrackList extends React.Component {
  componentDidMount() {
    this.props.showActionsList();
  }
  showList() {
    return this.props.elementTrackList.trackList.map(List => {
      return (
        <React.Fragment key={List.id}>
          <div>
            <LI>{List.artistName}</LI>
            <p>"{List.name}"</p>
            <button onClick={() => this.props.selectTrackActive(List.id)}>
              play
            </button>
          </div>
          <hr />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <COMPONENT>
        <COMPONENTSCROLL>
          <UL>{this.showList()}</UL>
        </COMPONENTSCROLL>
        <AuthorImg />
      </COMPONENT>
    );
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
});

const matchDispatchToProps = dispatch => ({
  showActionsList() {
    dispatch(getTrackList());
  },
  selectTrackActive(id) {
    dispatch(getTrackActive(id));
  }
});

export default connect(mapStateProps, matchDispatchToProps)(ComponentTrackList);
