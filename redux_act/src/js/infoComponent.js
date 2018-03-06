import React from "react";
import { connect } from "react-redux";

class InfoComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.elementInfo}</h3>
        {/* <IMAGE src={this.props.elementAuthor.author} />
        <AUDIO src={this.props.elementAuthor.audio} controls />
        <img src={this.props.elementAuthorImg.audioURL} /> */}
      </div>
    );
  }
}

const mapStateProps = state => ({
  elementInfo: state.reducerInfo
});

export default connect(mapStateProps)(InfoComponent);
