import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {AsyncPipe, JsonPipe, NgFor} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-child',
  template: ``,
  imports: [JsonPipe, AsyncPipe, NgFor],
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
    <app-child/>
    <ng-web-console/>
    <button (click)="clearConsole()">Clear console</button>
    <button (click)="print()">Print</button>
  `,
  styles: [`
    button {
      margin-top: 20px;
      background-color: #04AA6D;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-right: 20px;

      &:hover {
        cursor: pointer;
        background-color: #068355;
      }
    }
  `]
})
export class AppComponent {
  constructor() {
    this.print();
  }

  clearConsole(){
    console.clear();
  }

  print(){
    const someObject = {
      foo: {
        bar: ['foo', 'bar'],
      },
      baz: 'qux',
    };
    console.log('some object', someObject);
    console.log('something else');
  }
}
