import React from "react";

import styled from "styled-components";

const Container = styled.div``;

export const Button = props => {
  return (
    <Container>
      <button onClick={props.changeState}>{props.buttonName}</button>
    </Container>
  );
};
