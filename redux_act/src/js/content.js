import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pageActions from "../action/action";
import { getStateProps } from "../selectors/selectors";
import { createSelector } from "reselect";
import styled from "styled-components";
import ComponentTrackList from "./componentTrackList";

// const Button = styled.button`
// 	display: ${props => props.isHidden ? 'none' : 'block' };
// 	color: ${props => props.color};
// `;

const Button = styled.button`
  color: cyan;
  border: 2px solid cyan;
  background: white;
`;

const H4 = styled.h4`
  color: cyan;
`;

class Content extends React.Component {
  // componentDidMount() {
  //   this.props.actions.increment();
  //   // console.log(this.props);
  // }

  render() {
    return (
      <div>
        {/* <Button color="red" isHidden={true} /> */}
        <H4>{this.props.element}</H4>
        <Button onClick={() => this.props.actions.increment(1)}>+</Button>
        <Button onClick={() => this.props.actions.decrement(1)}>-</Button>
        <ComponentTrackList />
      </div>
    );
  }
}

const mapStateProps = state => ({
  // element: state.reducerAdd
  element: getStateProps(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(pageActions, dispatch)
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ ...pageActions }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(Content);
// export default connect(mapStateProps)(Content);
