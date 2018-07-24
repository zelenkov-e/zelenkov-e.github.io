import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Li = styled.li`
  color: ${props => (props.colorStateElement ? "red" : "black")};
`;

const OptionElement = props => {
  return (
    <div>
      <h2>{props.listName}</h2>
      <ul>
        {props.optionElement.map(item => (
          <Li key={item.toString()} colorStateElement={props.colorElement}>
            {item}
          </Li>
        ))}
      </ul>
    </div>
  );
};

let mapStateProps = state => {
  return {
    optionElement: state.optionElementReducer,
    colorElement: state.colorElementReducer
  };
};

export default connect(mapStateProps)(OptionElement);
