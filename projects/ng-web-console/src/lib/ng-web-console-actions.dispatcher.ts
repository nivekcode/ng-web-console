import {ReplaySubject} from "rxjs";

export interface NgWebConsoleAction {
  type: 'reset' | 'log';
  payload?: any;
}

export class NgWebConsoleDispatcher {

  private static actionsSubject = new ReplaySubject<NgWebConsoleAction>();
  public static actions$ = this.actionsSubject.asObservable();

  public static log(log: IArguments) {
    this.actionsSubject.next({
      type: 'log',
      payload: NgWebConsoleDispatcher.convertArgumentsToString(log)
    });
  }

  public static reset() {
    this.actionsSubject.next({
      type: 'reset'
    });
  }

  private static convertArgumentsToString(args: IArguments): string {
    const argsArray = Array.from(args);
    return argsArray
      .map((arg) => {
        if (typeof arg === 'object') {
          return JSON.stringify(arg, null, 2);
        } else {
          return arg;
        }
      })
      .toString();
  }

}
