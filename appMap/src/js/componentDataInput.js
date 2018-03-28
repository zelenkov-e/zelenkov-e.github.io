import React from "React";
import { connect } from "react-redux";
import styled from "styled-components";

const DETAILS = styled.div`
  width: 150px;
  height: 40px;
  margin: 15px;
  border: 1px solid;
`;
//view data from input
class ComponentDataInput extends React.Component {
  render() {
    return (
      <DETAILS>
        <p>{this.props.elementDataInput.elemState}</p>
      </DETAILS>
    );
  }
}

const mapStateToProps = state => ({
  //   elementDataInput: state.reducerDataInput
  elementDataInput: state.reducerDataInput
});

export default connect(mapStateToProps)(ComponentDataInput);
