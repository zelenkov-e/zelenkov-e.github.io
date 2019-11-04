import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DataModule } from "../data/data.module";
import { AppComponent } from "../components/app.component";
import { ChildComponent } from "../components/child.component";
import { InputComponent } from "../components/input.component";
import { EventComponent } from "../components/event.component";
import { DirectiveComponent } from "../components/directive.component";
import { PhoneComponent } from "../components/phone.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpComponent } from "../components/http.component";
import { FactorialComponent } from "../components/factorial.component";

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
