import * as React from "react";
import * as ReactDOM from "react-dom";


import { Hello } from "./components/Hello";

ReactDOM.render(
    // console.log('hi')
    <Hello name="Zhenya" sername="Zelenkof" />,
    document.getElementById("example")
);