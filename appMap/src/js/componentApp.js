//view data from onClick button 'show'or 'deleate'
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ComponentDataInput from "./componentDataInput";
import { actionCreatorInput } from "../action/action";
import { actionCreatorRepaint } from "../action/action";

const CONTAINERON = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid;
`;
const CONTAINEROFF = styled.div`
  display: none;
`;

const INPUT = styled.input`
  width: 150px;
  margin: 15px;
`;
const BUTTONS = styled.div`
  margin: 15px;
`;
const BUTTON = styled.button`
  width: 50px;
  background-color: ${({ color }) => color};
  color: #fff
  border: 2px solid;
`;
const BUTTONCLEAR = styled.button`
  width: 150px;
  margin: 15px;
`;

class ComponentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeColor: "#000" };
    this.setColor = this.setColor.bind(this);
  }

  setColor = event => {
    const color = event.target.getAttribute("color");
    console.log(color);
    this.setState({ activeColor: color });
  };

  render() {
    // actionData - data from paylod action.js
    const actionData = this.props.elementApp.elemState;

    let CONTAINER =
      actionData === "on"
        ? (CONTAINER = CONTAINERON)
        : (CONTAINER = CONTAINEROFF);

    return (
      <CONTAINER>
        <form
          //onSubmit - send data from input in  ComponentDataInput
          onSubmit={e => {
            e.preventDefault();
            this.props.showInputValue(e);
          }}
        >
          <INPUT placeholder="Text search" />
          <INPUT type="submit" value="show" />
        </form>

        <BUTTONCLEAR onClick={() => this.props.clearInputValue()}>
          clear
        </BUTTONCLEAR>
        {/* /onclick button set color view in in  ComponentDataInput/ */}
        <BUTTONS>
          <BUTTON color="red" onClick={this.setColor}>
            red
          </BUTTON>
          <BUTTON color="blue" onClick={this.setColor}>
            blue
          </BUTTON>
          <BUTTON color="green" onClick={this.setColor}>
            green
          </BUTTON>
        </BUTTONS>
        <ComponentDataInput activeColor={this.state.activeColor} />
      </CONTAINER>
    );
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});

const matchDispatchToProps = dispatch => ({
  showInputValue(e) {
    // e.target.querySelector("input").value -  get value from input;
    dispatch(actionCreatorInput(e.target.querySelector("input").value));
  },
  clearInputValue() {
    // call actionCreatorInput() - set state - '  ', in payload - value - ' '
    dispatch(actionCreatorInput());
  },
  repaintShowInput() {
    //
    dispatch(actionCreatorRepaint());
  }
});
export default connect(mapStateToProps, matchDispatchToProps)(ComponentApp);
