import React from "react";

export class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.getOption = this.getOption.bind(this);
  }

  getOption(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.props.selectMenuName}</h1>
        <select value={this.state.value} onChange={this.getOption}>
          {this.props.optionElement.map(item => (
            <option key={item.toString()}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}
