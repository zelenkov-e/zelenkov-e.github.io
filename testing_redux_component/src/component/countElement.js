import React from "react";

class CounterElement extends React.Component {
  render() {
    return (
      <div>
        <h2>button:</h2>
        <button onClick={this.props.onClick}>click</button>
      </div>
    );
  }
}

export default CounterElement;
