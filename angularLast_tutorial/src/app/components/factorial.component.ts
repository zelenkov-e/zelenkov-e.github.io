import { Component } from "@angular/core";
import { FactorialService } from "../service/factorial.service";

@Component({
  selector: "factorial-component",
  template: `
    <p>{{ title }}</p>
    <input type="text" [(ngModel)]="num" />
    <button (click)="submit(num)">send</button>
  `,
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
