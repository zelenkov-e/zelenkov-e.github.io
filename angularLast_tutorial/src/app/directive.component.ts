import { Component } from "@angular/core";

@Component({
  selector: "directive-component",
  template: `
    <div [ngClass]="{ verdanaFont: true }">
      <p>Hello Angular 8</p>
      <p [ngClass]="{ segoePrintFont: true }">
        In this sentense we are using other style with [ngClass] Directive
      </p>
      <p [ngStyle]="{ color: 'blue' }">
        In this sentense we are using other style with [ngStyle] Directive
      </p>
    </div>
    <hr />
    <div>
      <h3>using *ngIf</h3>
      <p *ngIf="condition">hello!</p>
      <p *ngIf="!condition">by!</p>

      <button (click)="toggle()">togggle</button>
    </div>
    <hr />
    <div>
      <h3>using *ngFor</h3>
      <ul>
        <li *ngFor="let item of items; let i = index">
          {{ i + 1 }} . {{ item }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
        color: red;
      }
      .segoePrintFont {
        font-size: 14px;
        font-family: "Segoe Print";
        color: green;
      }
    `
  ]
})
export class DirectiveComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  items = [
    "Apple iPhone 7",
    "Huawei Mate 9",
    "Samsung Galaxy S7",
    "Motorola Moto Z"
  ];
}
