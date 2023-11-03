import { Injectable } from '@angular/core';
import { LogBus } from './logbus';

@Injectable({
  providedIn: 'root',
})
export class MonkeyPatcher {
  patchConsole() {
    const log = console.log;

    console.log = function () {
      LogBus.sendLog(arguments);
      log.apply(console, arguments as any);
    };
  }
}
