import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "event-component",
  template: `
    <h1>
      <h1>
        <p>{{ title }}</p>
      </h1>
    </h1>
    <button (click)="change(true)">+</button>
    <button (click)="change(flse)">-</button>
  `
})
export class EventComponent {
  @Output() onChanged = new EventEmitter<boolean>();

  change(grow: any) {
    this.onChanged.emit(grow);
  }
  title = "Transfer event from child to Parent component";
}
