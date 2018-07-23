import React from "react";
import styled from "styled-components";

const Li = styled.li`
  color: ${props => (props.colorElement ? "red" : "black")};
`;

export const OptionElement = props => {
  return (
    <ul>
      {props.optionElement.map((item, props) => (
        <Li key={item.toString()} colorElement={props.colorElement}>
          {item}
        </Li>
      ))}
    </ul>
  );
};
