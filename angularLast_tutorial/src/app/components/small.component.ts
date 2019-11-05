import {
  Component,
  OnInit,
  ContentChild,
  ElementRef,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "small-component",
  template: `
    <p>{{ message }}</p>
  `
})
export class SmallComponent implements OnInit {
  message = "this is small component";

  //   @ContentChild("p") headerElement: ElementRef;

  constructor() {}

  //   ngAfterContentInit() {
  //     console.log(this.headerElement.nativeElement);
  //   }

  ngOnInit() {}
}
