import React from "react";

import List from "./list";
import Details from "./details";
import Counter from "./Counter";
import ButtonElement from "./ButtonElement";
import styled from "styled-components";

const CountContainer = styled.div`
  width: 200px;
  border: 1px solid;
`;

const ContainerApp = styled.div`
  width: 300px;
  border: 2px solid red;
`;

class Content extends React.Component {
  render() {
    return (
      <ContainerApp className="container">
        <h1>redux app</h1>
        <List />
        <hr />
        <h4>details:</h4>
        <Details />
        <hr />
        <CountContainer>
          <p>this counter..</p>
          <Counter />
          <ButtonElement />
        </CountContainer>
      </ContainerApp>
    );
  }
}

export default Content;
