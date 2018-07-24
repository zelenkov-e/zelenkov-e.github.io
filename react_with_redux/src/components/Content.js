import React from "react";
import { connect } from "react-redux";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";

import Counter from "./Counter";
import { Button } from "./Button";
import { SelectMenu } from "./SelectMenu";
import OptionElement from "./OptionElement";
// import { ButtonChangeColor } from "./ButtonChangeColor";
import { OPTIONELEMENTS } from "../cosnstants/cosnstants";

const Content = props => {
  return (
    <div>
      <Counter counterName="Counter" />
      <Button
        buttonName={props.buttonHide}
        changeState={() => props.pageActions.increment()}
      />
      <Button
        buttonName={props.buttonLow}
        changeState={() => props.pageActions.decrement()}
      />
      <Button
        buttonName={props.buttonClear}
        changeState={() => props.pageActions.clear()}
      />
      <Button
        buttonName={props.buttonShow}
        changeState={() => props.pageActions.show()}
      />
      <hr />
      <OptionElement listName="List" colorStateElement={props.colorElement} />
      <Button
        changeState={() => props.pageActions.changeColor()}
        buttonName="changeColorList"
      />
      <hr />
      <SelectMenu selectMenuNme="Select Menu" selectElement={OPTIONELEMENTS} />
    </div>
  );
};

let mapStateProps = state => {
  return {
    content: state.contentReducer,
    buttonHide: state.buttonReducer.buttonHide,
    buttonLow: state.buttonReducer.buttonLow,
    buttonClear: state.buttonReducer.buttonDel,
    buttonShow: state.buttonReducer.buttonShow
  };
};

let mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Content);
