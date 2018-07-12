import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectPhone } from "../action/action";

class List extends React.Component {
  showList() {
    return this.props.phones.map(phone => {
      return (
        <li onClick={() => this.props.select(phone)} key={phone.id}>
          {phone.model}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ol>{this.showList()}</ol>
      </div>
    );
  }
}

let mapStateProps = state => {
  return {
    phones: state.phones
  };
};

let matchDispatchToProps = dispatch => {
  return bindActionCreators({ select: selectPhone }, dispatch);
};

export default connect(
  mapStateProps,
  matchDispatchToProps
)(List);
