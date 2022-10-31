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
  templateUrl: "./app.component.html"
})
export class AppComponent {
  //интерполяция
  title = "toDoList";
  items: Item[] = [
    { purchase: "Tomatos", done: false, price: 15.9 },
    { purchase: "Cheese", done: false, price: 60 },
    { purchase: "Potatoes", done: true, price: 22.6 },
    { purchase: "Bread", done: false, price: 310 }
  ];

  //text и price  - параметры из temlate из input [(ngModel)]="text"
  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
  }
}
