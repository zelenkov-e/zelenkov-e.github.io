// import React from "react";
import * as React from "react";
// import * as React-redux from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pageActionsTsx from "../action/action";

// import { incrementTsx } from "../action/action";
// import { getStateProps } from "../selectors/selectors";

// const pageActionsTsx = incrementTsx require('../action/action');

// interface StateProps {
//   elementTsx: any;
//   reducerTsx: any;
//   actionsTsx: any;
// }

// interface DispatchProps {
//   // doMyAction(message: string)
//   pageActionsTsx: any;
// }

// class Content extends React.Component<StateProps, {}> {
class Content extends React.Component<any, any> {
  // class Content extends React.Component {
  componentDidMount() {
    this.props.actionsTsx.incrementTsx();
  }

  render() {
    return (
      <div>
        <h4>{this.props.elementTsx.count}</h4>
      </div>
    );
  }
}

const mapStateProps = (state: any) => ({
  elementTsx: state.reducerTsx
});

const mapDispatchToProps = (dispatch: any) => ({
  actionsTsx: bindActionCreators<{}>(pageActionsTsx, dispatch)
});

export default connect<any>(mapStateProps, mapDispatchToProps)(Content);
// export default connect(mapStateProps)(Content);
// @connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
