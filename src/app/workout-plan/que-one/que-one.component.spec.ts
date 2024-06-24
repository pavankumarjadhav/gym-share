/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueOneComponent } from './que-one.component';

describe('QueOneComponent', () => {
  let component: QueOneComponent;
  let fixture: ComponentFixture<QueOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
