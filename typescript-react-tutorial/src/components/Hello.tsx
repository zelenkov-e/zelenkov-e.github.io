import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

//function
// export const Hello = (props: HelloProps) => (
//   <h1>
//     hello from {props.compiler} and {props.framework} !
//   </h1>
// );

//class
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
