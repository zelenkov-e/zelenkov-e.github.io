import { Component } from "@angular/core";
// import { HttpService } from "./service/http.service";

@Component({
  selector: "factorial-component",
  template: `
    <p>{{ title }}</p>
  `
})
export class FactorialComponent {
  title = "smt. message";
}
