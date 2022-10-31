import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// type AppProps = ConnectedProps<typeof connector>;

class App extends Component {
  public render() {
    return (
      <div>Hello</div>
      //   <BrowserRouter>
      //     <Switch>
      //       {this.props.error && <Route component={ErrorPage} />}
      //       <Route path="/" component={HomePage} />
      //       <Route path="*">
      //         <ErrorPage code={404} />
      //       </Route>
      //     </Switch>
      //   </BrowserRouter>
    );
  }
}

// const connector = connect(
//   (state: ApplicationState) => {
//     return {
//       user: state.currentUser,
//       error: state.error.error,
//     };
//   },
//   (dispatch) => {
//     return bindActionCreators(
//       Object.assign({}, currentUserActionCreators, errorActionCreators),
//       dispatch
//     );
//   }
// );

// export default connector(App);
export default App;
