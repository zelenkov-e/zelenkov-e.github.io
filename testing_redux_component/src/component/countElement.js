import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  border: 1px solid;
`;

const H3 = styled.h3`
  color: red;
`;

class CounterElement extends React.Component {
  render() {
    return (
      <Container>
        <H3>this is React component</H3>
        <p>onclick - change state redux component</p>
        <button onClick={this.props.onClick}>change title color </button>
      </Container>
    );
  }
}

export default CounterElement;
