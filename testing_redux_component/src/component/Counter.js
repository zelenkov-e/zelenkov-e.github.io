import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  border: 1px solid;
`;

class Counter extends React.Component {
  render() {
    return (
      <Container>
        <p>first component</p>
        <h1>{this.props.count}</h1>
      </Container>
    );
  }
}

let mapStateProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateProps)(Counter);
