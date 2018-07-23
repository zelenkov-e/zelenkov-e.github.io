import React from "react";
import { connect } from "react-redux";
import * as pageActions from "../action/action";
import { bindActionCreators } from "redux";

import Counter from "./Counter";
import { Button } from "./Button";
import ButtonClear from "./ButtonClear";
import { SelectMenu } from "./SelectMenu";
import { OptionElement } from "./OptionElement";
import { OPTIONELEMENTS } from "../cosnstants/cosnstants";

const Content = props => {
  return (
    <div>
      <h1>redux_act</h1>
      <Counter />
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
      <OptionElement
        colorElement={props.colorElement}
        optionElement={OPTIONELEMENTS}
      />
      <SelectMenu
        // optionElemnt={this.props.optionElemnt}
        optionElement={OPTIONELEMENTS}
        selectMenuName="SelectMenu"
      />
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
    // optionElement: state.optionElementReducer.color,
    // colorElement: state.optionElementReducer
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
