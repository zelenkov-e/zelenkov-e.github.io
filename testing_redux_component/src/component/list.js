import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";

import CounterElement from "./countElement";

const H4 = styled.h4`
  color: ${props => (props.colorTitle ? "red" : "black")};
`;

class List extends React.Component {
  showList() {
    return this.props.phones.map(phone => {
      return (
        <li
          onClick={() => this.props.pageActions.selectPhone(phone)}
          key={phone.id}
        >
          {phone.model}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <CounterElement onClick={() => this.props.pageActions.selectColor()} />
        <H4 colorTitle={this.props.colorTitle}>phone:</H4>
        <p> choose element from list ..</p>
        <ol>{this.showList()}</ol>
      </div>
    );
  }
}

let mapStateProps = state => {
  return {
    phones: state.phones,
    colorTitle: state.colorChange
  };
};

let matchDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(
  mapStateProps,
  matchDispatchToProps
)(List);
