import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';

import { MonkeyPatcher } from './monkey-patcher.service';

export const provideNgWebConsole = () => ({
  provide: ENVIRONMENT_INITIALIZER,
  multi: true,
  useValue() {
    inject(MonkeyPatcher).patchConsole();
  },
});
