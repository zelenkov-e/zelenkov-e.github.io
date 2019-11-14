import * as React from "react";

interface Props {
  count: number;
}

export default class Count extends React.Component<Props> {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
