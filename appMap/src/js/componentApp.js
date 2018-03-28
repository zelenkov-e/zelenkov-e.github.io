import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ComponentDataInput from "./componentDataInput";
import { actionCreatorInput } from "../action/action";

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
`;
const BUTTONRED = BUTTON.extend`
  background-color: red;
  color: white;
  border: 2px solid;
`;
const BUTTONBLUE = BUTTON.extend`
  background-color: blue;
  color: white;
  border: 2px solid;
`;
const BUTTONGREEN = BUTTON.extend`
  background-color: green;
  color: white;
  border: 2px solid;
`;
const BUTTONCLEAR = styled.button`
  width: 150px;
  margin: 15px;
`;

class ComponentApp extends React.Component {
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
          <BUTTONRED>red</BUTTONRED>
          <BUTTONBLUE>blue</BUTTONBLUE>
          <BUTTONGREEN>green</BUTTONGREEN>
        </BUTTONS>
        <ComponentDataInput />
      </CONTAINER>
    );
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});

const matchDispatchToProps = dispatch => ({
  showInputValue(e) {
    dispatch(actionCreatorInput(e.target.querySelector("input").value));
    // e.target.querySelector("input").value -  get value from input;
  },
  clearInputValue() {
    dispatch(actionCreatorInput());
    // call actionCreatorInput() - set state - '  ', in payload - value - ' '
  }
});
export default connect(mapStateToProps, matchDispatchToProps)(ComponentApp);
