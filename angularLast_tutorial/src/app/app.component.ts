import { Component } from "@angular/core";

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: "purchase-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //интерполяция
  title = {
    name: "Yauheni",
    setStyle: "Set styles",
    count: "Counter",
    ngcontent: "Using ng-content",
    transferDataFromChildren: "Transfer data to child component",
    usingModules: "Using logic Child Module in Parent Module",
    usingDirective: "Using directive [ngClass]",
    usingService: "Using Service",
    usungHttpInService: "Using Http in Service"
  };
  count: number = 0;
  clicks: number = 0;
  isRed = false;

  increase(): void {
    this.count++;
  }
  less($event: any): void {
    this.count--;
    console.log($event);
  }

  onChanged(grow: any): void {
    grow == true ? this.clicks++ : this.clicks--;
  }
}
