import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as pageActions from "../action/action";
// import { getStateProps } from "../selectors/selectors";

class ComponentTrackList extends React.Component {
  // componentDidMount() {
  //   this.props.actions.increment();
  //   // console.log(this.props);
  // }

  render() {
    // return <h3>{this.props.elementTrackList}</h3>;
    return this.props.elementTrackList.map(trackList => {
      return <li key={trackList.id}>{trackList.model}</li>;
    });
  }
}

const mapStateProps = state => ({
  elementTrackList: state.reducerTrackList
  //   element: getStateProps(state)
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(pageActions, dispatch)
// });

// export default connect(mapStateProps, mapDispatchToProps)(Content);
export default connect(mapStateProps)(ComponentTrackList);
