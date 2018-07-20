import React from "react";
import Counter from "./Counter";
import Button from "./Button";
import ButtonClear from "./ButtonClear";
import TodoList from "./TodoList";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>redux_act</h1>
        <Counter />
        <Button
        // increment={() => this.props.pageActions.increment}
        // decrement={() => this.props.pageActions.decrement}
        />
        <ButtonClear />
        <TodoList todo="toDo" />

        {/* <Button
          increment={() => {
            console.log("inrement by 10");
          }}
        /> */}
      </div>
    );
  }
}
