import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

import { LogBus } from './logbus';

@Component({
  standalone: true,
  selector: 'ng-web-console',
  template: `
    <h1>Web Console</h1>
    <ngx-codemirror
      [ngModel]="logs$ | async"
      [options]="{
        readOnly: 'nocursor',
        theme: 'Skol',
        mode: 'javascript'
      }"
    ></ngx-codemirror>
  `,
  styleUrls: ['./ng-web-console.component.scss'],
  imports: [AsyncPipe, NgFor, CodemirrorModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class NgWebConsoleComponent {
  logs$ = LogBus.getLogs().pipe(
    map((logs) =>
      logs
        .map((log, index) => {
          if (index === logs.length - 1) {
            return log;
          }
          return `${log}\n`;
        })
        .reduce((acc, curr) => acc + curr, ''),
    ),
  );
}
