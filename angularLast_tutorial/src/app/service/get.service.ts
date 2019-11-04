import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FactorialService {
  constructor(private http: HttpClient) {}

  getFactorial(num: number) {
    return this.http.get(
      "http://localhost:60489/Home/GetFactorial?number=" + num
    );
  }
}
