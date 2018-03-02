// import React from "react";
import * as React from "react";
import { connect } from "react-redux";
// import { incrementTsx } from "../action/action";
import * as pageActionsTsx from "../action/action";
// import { getStateProps } from "../selectors/selectors";

// interface StateProps {
//   elementTsx?: any;
//   reducerTsx?: any;
//   actionsTsx?: any;
// incrementTsx?: any;
// incrementTsx: ;
// actionsTsx: any;
// }

// interface DispatchProps {
//   // doMyAction(message: string)
//   pageActionsTsx: any;
// }

// class Content extends React.Component<StateProps, {}> {
class Content extends React.Component<any> {
  // class Content extends React.Component {
  // class Content extends React.Component {
  componentDidMount() {
    // this.props.actionsTsx.incrementTsx();
    this.props.dispatch(pageActionsTsx.incrementTsx);
  }

  render() {
    return (
      <div>
        <h4>{this.props.elementTsx.count}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  // const mapStateProps = state => ({
  elementTsx: state.reducerTsx
});

// const mapDispatchToProps = (dispatch: any) => ({
//   // const mapDispatchToProps = dispatch => ({
//   actionsTsx: dispatch(incrementTsx())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Content);

// export const ComponentContainer = connect(mapStatetoProps, mapDispatchToProps)(
//   Content
// );
export default connect(mapStateToProps)(Content);
