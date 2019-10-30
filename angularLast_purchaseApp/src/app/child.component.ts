import { Component } from "@angular/core";

@Component({
  selector: "child-component",
  template: `
    <ng-content></ng-content>
    <p>from childComponent</p>
    <p>{{ name }}</p>
  `,
  styles: [
    `
      p {
        color: red;
      }
    `
  ]
})
export class ChildComponent {
  greeting = "Hello ! This is ChildComponent";
  name = "Zeliankou";
}
