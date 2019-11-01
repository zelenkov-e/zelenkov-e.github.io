import { Component } from "@angular/core";
import { DataService } from "./service/data.service";

@Component({
  selector: "phone-component",
  template: `
    <p>{{ message }}</p>

    <div>
      <input [(ngModel)]="name" placeholder="Модель" />
      <button (click)="addItem(name)">add</button>
    </div>

    <ul *ngFor="let item of items">
      <li>{{ item }}</li>
    </ul>
  `,
  providers: [DataService]
})
export class PhoneComponent {
  message = "add smth.";

  items: string[] = [];

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.items = this.dataservice.getData();
  }

  addItem(name: string) {
    this.dataservice.addData(name);
  }
}
