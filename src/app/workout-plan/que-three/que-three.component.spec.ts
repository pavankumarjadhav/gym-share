/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueThreeComponent } from './que-three.component';

describe('QueThreeComponent', () => {
  let component: QueThreeComponent;
  let fixture: ComponentFixture<QueThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
