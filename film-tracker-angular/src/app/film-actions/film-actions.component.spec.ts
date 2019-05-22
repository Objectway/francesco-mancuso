import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmActionsComponent } from './film-actions.component';

describe('FilmActionsComponent', () => {
  let component: FilmActionsComponent;
  let fixture: ComponentFixture<FilmActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
