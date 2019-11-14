import * as React from "react";

interface User {
  name: string;
  age: number;
  address: string;
  dob: Date;
}

export default class UserDescription extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>User Component</h1>
        Hello, {this.props.name}
        <br />
        You are {this.props.age} years old,
        <br />
        You live at: {this.props.address}
        <br />
        you were born: {this.props.dob.toDateString()}
      </div>
    );
  }
}
