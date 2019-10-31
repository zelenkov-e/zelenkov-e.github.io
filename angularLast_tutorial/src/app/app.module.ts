import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.components";
import { ChildComponent } from "./child.component";
import { InputComponent } from "./input.component";
import { EventComponent } from "./event.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, InputComponent, EventComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
