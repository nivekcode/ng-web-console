import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

import {Component, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, NgFor} from '@angular/common';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {FormsModule} from '@angular/forms';
import {scan} from 'rxjs';

import {NgWebConsoleDispatcher} from "./ng-web-console-actions.dispatcher";

@Component({
  standalone: true,
  selector: 'ng-web-console',
  template: `
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
  logs$ = NgWebConsoleDispatcher.actions$
    .pipe(
      scan((acc, action) => {
          if (action.type === 'reset') {
            return '';
          }
          return acc + action.payload + '\n';
        }, ''
      ),
    );
}
