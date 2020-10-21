import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrittiniComponent } from './grittini.component';

describe('GrittiniComponent', () => {
  let component: GrittiniComponent;
  let fixture: ComponentFixture<GrittiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrittiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrittiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
