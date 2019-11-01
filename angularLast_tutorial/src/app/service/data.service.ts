import { Injectable } from "@angular/core";
import { logService } from "./log.servise";

@Injectable()
export class DataService {
  private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];

  constructor(private logService: logService) {}

  getData(): string[] {
    this.logService.write("SHOWED ALL PHONE LIST");
    return this.data;
  }

  addData(name: string) {
    this.logService.write("ADDED NEW ITEM TO PHONE LIST");
    this.data.push(name);
  }
}
