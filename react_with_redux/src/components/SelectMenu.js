import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Li = styled.li`
  color: ${props => (props.colorElement ? "red" : "black")};
`;

export class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "option2",
      colorElement: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      colorElement: !this.state.colorElement
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.selectMenuNme}</h2>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.selectElement.map(item => (
            <option key={item.toString()}>{item}</option>
          ))}
        </select>

        <ul>
          {this.props.selectElement.map(item => (
            <Li key={item.toString()} colorElement={this.state.colorElement}>
              {item}
            </Li>
          ))}
        </ul>
      </div>
    );
  }
}
