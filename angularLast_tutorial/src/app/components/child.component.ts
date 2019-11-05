import { Component } from "@angular/core";

@Component({
  selector: "child-component",
  template: `
    <ng-content></ng-content>
    <p>from childComponent</p>
    <p>{{ name }}</p>
    <p>{{ counter }}</p>
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
  name = "Zeliankou";
  counter: number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
