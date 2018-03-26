import React from "react";
import { connect } from "react-redux";

class ComponentApp extends React.Component {
  render() {
    const classApp = this.props.elementApp.elemState;

    return <div className={classApp} />;
  }
}
const mapStateToProps = state => ({
  elementApp: state.reducerState
});
export default connect(mapStateToProps)(ComponentApp);
