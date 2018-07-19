import React from "react";
import Counter from "./Counter";
import Button from "./Button";
import ButtonClear from "./ButtonClear";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>redux_act</h1>
        <Counter />
        <Button />
        <ButtonClear />
      </div>
    );
  }
}
