import React from "react";
import styled from "styled-components";

class TodoList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       list: " "
  //     };
  //   }

  //   showList = () => {
  //     this.setState({ list: event.target.value });
  //   };

  render() {
    return (
      <div>
        <h2>{this.props.todo}</h2>
        <input
        // value={this.state.list}
        />
        <button onClick={this.showList}>add</button>
        <hr />
        {/* <li>{this.shoeList()}</li> */}
      </div>
    );
  }
}

export default TodoList;
