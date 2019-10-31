import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "phone-component",
  template: `
    <p>{{ message }}</p>
  `
})
export class PhoneComponent {
  message = "message";
}
