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
  title = "toDoList";
  name = "Yauheni";
  count: number = 0;
  clicks: number = 0;
  isRed = false;

  increase(): void {
    this.count++;
  }

  onChanged(grow: any): void {
    grow == true ? this.clicks++ : this.clicks--;
  }

  less($event: any): void {
    this.count--;
    console.log($event);
  }
}
