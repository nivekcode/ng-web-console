import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {ReplaySubject, scan} from "rxjs";
import {AsyncPipe, JsonPipe, NgFor} from "@angular/common";

@Component({
  standalone: true,
  selector: 'child',
  template: `
    <h1>Child</h1>
  `,
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
    <h1>Logs</h1>
    <child/>

    <h1>With async</h1>
    <div *ngFor="let log of log$ | async">
      {{log | json}}
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-console-showcase';

  log$ = Proxy.messages.pipe(
    scan((acc: any[], curr: any) => {
      acc.push(curr);
      return acc;
    }, [])
  );

  constructor() {
    const log = console.log;

    console.log = function () {
      Proxy.messages.next(Object.values(arguments).toString());
      log.apply(console, arguments as any);
    }

    console.log('foo', 'bar');
  }
}
