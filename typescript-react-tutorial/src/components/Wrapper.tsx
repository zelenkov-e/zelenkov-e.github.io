import * as React from "react";

import { Hello } from "../components/Hello";
import { Counter } from "../components/Counter";
import { Logo } from "./Logo";
import UserDescription from "./UserDescription";

export const Wrapper = () => (
  <div>
    <Logo />
    <UserDescription
      name="Logrocket"
      age={105}
      address="get me if you can"
      dob={new Date()}
    />
    <Hello compiler="Typescript" framework="react" />
    <Counter />
  </div>
);
