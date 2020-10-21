import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelenaComponent } from './helena.component';

describe('HelenaComponent', () => {
  let component: HelenaComponent;
  let fixture: ComponentFixture<HelenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
