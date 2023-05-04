import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-lifecycle",
  templateUrl: "./lifecycle.component.html",
  styleUrls: ["./lifecycle.component.scss"],
})
export class LifecycleComponent implements OnInit {
  inputFromParent: string = "";
  title: string;
  test: string = "default";
  array1: number[] = [1, 2, 3];

  myObservable = new Observable((observer) => {
    console.log("Observable started");
    setTimeout(() => {
      observer.next("1");
    }, 1000);
    setTimeout(() => {
      observer.next("2");
    }, 2000);
    setTimeout(() => {
      observer.next("3");
    }, 3000);
    // Error
    // setTimeout(() => {
    //   observer.error(new Error('something wrong'));
    // }, 3000);
    setTimeout(() => {
      observer.next("4");
    }, 4000);
    setTimeout(() => {
      observer.next("5");
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
  });

  observer = {
    next: (val: any) => console.log(val),
    error: (err: any) => alert(err.message),
    complete: () => console.log("completed"),
  };

  ngOnInit(): void {
    // of(this.array1).subscribe(this.observer);
    this.myObservable.subscribe(this.observer);
  }

  onSubmit(inputEl: HTMLInputElement) {
    this.inputFromParent = inputEl.value;
  }

  onKeyUp() {
    console.log(this.test);
  }
}
