import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabemusPapamComponent } from './habemus-papam.component';

describe('HabemusPapamComponent', () => {
  let component: HabemusPapamComponent;
  let fixture: ComponentFixture<HabemusPapamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabemusPapamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabemusPapamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
