import React from "react";
import { connect } from "react-redux";

class ComponentApp extends React.Component {
  render() {
    return <p>{this.props.elementApp}</p>;
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState.elemState

});
export default connect(mapStateToProps)(ComponentApp);
