import React from "react";

class CounterElement extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   this.hightCurrent = this.hightCurrent.bind(this);
  //   this.lowCurrent = this.lowCurrent.bind(this);
  //   this.state = {
  //     count: 1
  //   };
  // }

  // hightCurrent() {
  //   this.setState(state => ({
  //     count: state.count + 1
  //   }));
  // }

  // lowCurrent() {
  //   this.setState(state => ({
  //     count: state.count - 1
  //   }));
  // }

  render() {
    return (
      <div>
        <h2>button:</h2>
        {/* <h1>{this.state.count}</h1> */}
        {/* <button onClick={this.hightCurrent}>+</button> */}
        {/* <button onClick={this.lowCurrent}>-</button> */}
        {/* <button onClick={this.props.changeColor}>changeColor</button> */}
        <button onClick={this.props.onClick}>click</button>
      </div>
    );
  }
}

export default CounterElement;
