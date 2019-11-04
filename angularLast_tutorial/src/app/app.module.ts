import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DataModule } from "./data/data.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child.component";
import { InputComponent } from "./input.component";
import { EventComponent } from "./event.component";
import { DirectiveComponent } from "./directive.component";
import { PhoneComponent } from "./phone.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpComponent } from "./http.component";
import { FactorialComponent } from "./factorial.component";

@NgModule({
  imports: [BrowserModule, FormsModule, DataModule, HttpClientModule],
  declarations: [
    AppComponent,
    ChildComponent,
    InputComponent,
    EventComponent,
    DirectiveComponent,
    PhoneComponent,
    HttpComponent,
    FactorialComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
