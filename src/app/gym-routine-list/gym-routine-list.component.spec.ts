/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GymRoutineListComponent } from './gym-routine-list.component';

describe('GymRoutineListComponent', () => {
  let component: GymRoutineListComponent;
  let fixture: ComponentFixture<GymRoutineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymRoutineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymRoutineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
