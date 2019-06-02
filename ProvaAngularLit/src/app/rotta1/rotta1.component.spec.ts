import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotta1Component } from './rotta1.component';

describe('Rotta1Component', () => {
  let component: Rotta1Component;
  let fixture: ComponentFixture<Rotta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
