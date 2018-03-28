//view data from input
import React from "React";
import { connect } from "react-redux";
import styled from "styled-components";

const DETAILS = styled.div`
  width: 150px;
  height: 40px;
  margin: 15px;
  border: 1px solid;
`;
const COLORRED = styled.button`
  color: red;
`;
const COLORBLUE = styled.button`
  color: blue;
`;
const COLORGREEN = styled.button`
  color: green;
`;

// let REPAINTDATAINPUT = styled.p`
//   color: ${this.props.elemRepaintInput.elemState};
// `;

class ComponentDataInput extends React.Component {
  render() {
    const { activeColor } = this.props;

    return (
      <DETAILS>
        <p style={{ color: activeColor }}>
          {this.props.elementDataInput.elemState}
        </p>
      </DETAILS>
    );
  }
}

const mapStateToProps = state => ({
  elementDataInput: state.reducerDataInput
});

export default connect(mapStateToProps)(ComponentDataInput);
