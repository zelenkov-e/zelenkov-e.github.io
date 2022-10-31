import { Component } from "@angular/core";
import { FactorialService } from "../service/factorial.service";

@Component({
  selector: "factorial-component",
  template: `
    <p>{{ title }}</p>
    <p>factorial : {{ factorial }}</p>
    <h2>set number</h2>
    <input type="text" [(ngModel)]="num" />
    <button (click)="submit(num)">send</button>
  `,
  styles: [
    `
      h2 {
        color: red;
      }
    `
  ],
  providers: [FactorialService]
})
export class FactorialComponent {
  title = "smt. message";

  constructor(private http: FactorialService) {}

  factorial: number;
  submit(num: number) {
    this.http
      .getFactorial(num)
      .subscribe((data: number) => (this.factorial = data));
  }
}
