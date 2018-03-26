import React from "react";
import { connect } from "react-redux";

class ComponentApp extends React.Component {
  render() {
    // return <p>{this.props.elementApp.elemState}</p>;
    return <p>{this.props.elementApp}</p>;
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});
export default connect(mapStateToProps)(ComponentApp);
