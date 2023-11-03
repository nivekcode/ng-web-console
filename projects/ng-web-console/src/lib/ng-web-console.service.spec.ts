import { TestBed } from '@angular/core/testing';

import { NgWebConsoleService } from './ng-web-console.service';

describe('NgWebConsoleService', () => {
  let service: NgWebConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWebConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
