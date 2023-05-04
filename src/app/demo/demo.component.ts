import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() inputEl: string = "At constructor";

  constructor() {
    console.log("constructor called");
    // console.log(this.inputEl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges called");
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log("ngOnInit called");
    // console.log(this.inputEl);
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    // Run after view and child view fully init
    // console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    // console.log("onDestroyed called");
  }
}
