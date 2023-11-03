import { ReplaySubject, scan } from 'rxjs';

export class LogBus {
  private static logs = new ReplaySubject<string>();

  public static sendLog(log: IArguments) {
    LogBus.logs.next(LogBus.convertArgumentsToString(log));
  }

  public static getLogs() {
    return LogBus.logs.pipe(
      scan((acc: any[], curr: any) => {
        acc.push(curr);
        return acc;
      }, []),
    );
  }

  private static convertArgumentsToString(args: IArguments): string {
    const argsArray = Array.from(args);
    return argsArray
      .map((arg) => {
        if (typeof arg === 'object') {
          return JSON.stringify(arg);
        } else {
          return arg;
        }
      })
      .toString();
  }
}
