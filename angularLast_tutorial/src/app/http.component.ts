import { Component } from "@angular/core";
import { HttpService } from "./service/http.service";
import { User } from "./user";

@Component({
  selector: "http-componet",
  template: `
    <div>
      <h3>{{ message }}</h3>
      <p>user name : {{ user?.name }}</p>
      <p>user name : {{ user?.age }}</p>
    </div>
  `,
  providers: [HttpService]
})
export class HttpComponent {
  message = "message";

  user: User;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe((data: User) => (this.user = data));
  }
}
