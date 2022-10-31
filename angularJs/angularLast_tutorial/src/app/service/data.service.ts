import { Injectable, Optional } from "@angular/core";
import { logService } from "./log.servise";

@Injectable()
export class DataService {
  private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];

  //added optional logService and delete from component
  // constructor(@Optional() private logService: logService) {}
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
