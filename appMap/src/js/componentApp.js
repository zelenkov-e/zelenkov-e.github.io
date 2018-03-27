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
          onSubmit={e => {
            e.preventDefault();
            this.props.showInputValue(e);
          }}
        >
          <INPUT placeholder="Text search" />
          <INPUT type="submit" value="Go" />
          <INPUT type="submit" value="clear" />
        </form>

        {/* <button onClick={() => this.props.showActionsList()}>show</button> */}

        <BUTTONS>
          <BUTTONRED>red</BUTTONRED>
          <BUTTONBLUE>blue</BUTTONBLUE>
          <BUTTONGREEN>green</BUTTONGREEN>
        </BUTTONS>
        {/* <DETAILS> */}
        <ComponentDataInput />
        {/* </DETAILS> */}
      </CONTAINER>
    );
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});

const matchDispatchToProps = dispatch => ({
  showInputValue(evt) {
    dispatch(actionCreatorInput(evt.target.querySelector("input").value));
  }
});
export default connect(mapStateToProps, matchDispatchToProps)(ComponentApp);
