// import React from "react";
import * as React from "react";
// import * as React-redux from "react-redux";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as pageActionsTsx from "../action/action.tsx";
// import { getStateProps } from "../selectors/selectors";

export interface HelloContent {
  elementTsx: object;
  count: number;
}

class Content extends React.Component<HelloContent, {}> {
  // componentDidMount() {
  //   this.props.actionsTsx.incrementTsx();
  // }

  render() {
    console.log(this.props.elementTsx);
    return (
      <div>
        <h4>{this.props.elementTsx}</h4>
      </div>
    );
  }
}

const mapStateProps = (state: HelloContent) => ({
  elementTsx: state.elementTsx
  //element: getStateProps(state)
});

// const mapDispatchToProps = dispatch => ({
//   actionsTsx: bindActionCreators(pageActionsTsx, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(Content);
