import { Component, Input } from "@angular/core";

@Component({
  selector: "input-component",
  template: `
    <p>userName: {{ userName }}</p>
  `
})
export class InputComponent {
  @Input() userName: string;
}
