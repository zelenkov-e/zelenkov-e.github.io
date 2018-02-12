import * as React from "react";

// tslint:disable-next-line:interface-name
export interface HelloProps { name: string; sername: string; }


export class Hello extends React.Component<HelloProps, {}> {
    public render() {
        return <h1>Hello  {this.props.name}  {this.props.sername}!</h1>;
    }
}
