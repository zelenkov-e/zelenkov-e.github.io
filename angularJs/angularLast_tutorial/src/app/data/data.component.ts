import { Component } from "@angular/core";

@Component({
  selector: "data-comp",
  template: "<p>{{message}}</p>"
})
export class DataComponent {
  message = "DataModule  -  this sentense from Data component";
}
