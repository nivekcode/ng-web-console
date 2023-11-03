import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWebConsoleComponent } from './ng-web-console.component';

describe('NgWebConsoleComponent', () => {
  let component: NgWebConsoleComponent;
  let fixture: ComponentFixture<NgWebConsoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgWebConsoleComponent]
    });
    fixture = TestBed.createComponent(NgWebConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
