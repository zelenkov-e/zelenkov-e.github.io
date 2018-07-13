import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import * as pageActions from "../action/action";

import CounterElement from "./countElement";

const H2 = styled.h2`
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
        <H2 colorTitle={this.props.colorTitle}>phone:</H2>
        <ol>{this.showList()}</ol>
        <hr />
        <CounterElement onClick={() => this.props.pageActions.selectColor()} />
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
