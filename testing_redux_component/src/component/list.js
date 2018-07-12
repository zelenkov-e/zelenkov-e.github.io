import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

// import CounterElement from "./countElement";
import { selectPhone } from "../action/action";
import CounterElement from "./countElement";

const H2 = styled.h2`
  color: ${props => (props.colorTitle ? "red" : "black")};
`;

class List extends React.Component {
  showList() {
    return this.props.phones.map(phone => {
      return (
        <li onClick={() => this.props.select(phone)} key={phone.id}>
          {phone.model}
        </li>
      );
    });
  }

  // changeColor(event) {
  // console.log("color");
  // this.props.color;
  // }

  render() {
    return (
      <div>
        <H2 colorTitle={this.props.colorTitle}>phone:</H2>
        <ol>{this.showList()}</ol>
        <hr />
        <CounterElement
        // onClick={this.changeColor}
        />
      </div>
    );
  }
}

let mapStateProps = state => {
  return {
    phones: state.phones,
    colorTitle: state.colorTitle
  };
};

let matchDispatchToProps = dispatch => {
  return bindActionCreators({ select: selectPhone }, dispatch);
};

export default connect(
  mapStateProps,
  matchDispatchToProps
)(List);
