import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {AsyncPipe, JsonPipe, NgFor} from "@angular/common";

@Component({
  standalone: true,
  selector: 'child',
  template: ``,
  imports: [JsonPipe, AsyncPipe, NgFor]
})
export class ChildComponent implements OnInit {

  constructor() {
    console.log('ChildComponent constructor');
  }

  ngOnInit(): void {
    console.log('ChildComponent ngOnInit');
  }

}

export class Proxy {
  static messages = new ReplaySubject();
}

@Component({
  selector: 'app-root',
  template: `
    <child/>
      <ng-web-console/>
  `
})
export class AppComponent {
   constructor() {
    const log = console.log;

    console.log = function () {
      Proxy.messages.next(Object.values(arguments).toString());
      log.apply(console, arguments as any);
    }

    const someObject = {
      foo: {
        bar: ['foo', 'bar']
      },
      baz: 'qux'
    }
     console.log('some object', someObject);
  }
}
