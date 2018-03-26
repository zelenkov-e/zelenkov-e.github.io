import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const DETAILS = styled.div`
  width: 150px;
  height: 10px;
  border: 1px solid;
`;

class ComponentApp extends React.Component {
  render() {
    const classApp = this.props.elementApp.elemState;
    // if (classApp) {
    //   return <p>click on the show..</p>;
    // }
    return (
      <div className={classApp}>
        <DETAILS />
        <div>
          <button>red</button>
          <button>blue</button>
          <button>green</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});
export default connect(mapStateToProps)(ComponentApp);
