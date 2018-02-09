import * as React from "react";

export interface HelloProps { name: string; sername: string; }


export class Hello extends React.Component<HelloProps, {}> {
    render() {
      
        return <h1>Hello  {this.props.name}  {this.props.sername}!</h1>;
    }
}