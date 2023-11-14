import {Injectable} from '@angular/core';
import {NgWebConsoleDispatcher} from "./ng-web-console-actions.dispatcher";

@Injectable({
  providedIn: 'root',
})
export class MonkeyPatcher {
  patchConsole() {
    const log = console.log;
    const clear = console.clear;

    console.log = function () {
      NgWebConsoleDispatcher.log(arguments);
      log.apply(console, arguments as any);
    };

    console.clear = function () {
      NgWebConsoleDispatcher.reset();
      clear.apply(console, arguments as any);
    }
  }
}
