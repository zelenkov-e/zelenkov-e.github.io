import React from "react";
import Counter from "./Counter";
import Button from "./Button";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>redux_act!</h3>
        <Counter />
        <Button />
      </div>
    );
  }
}
