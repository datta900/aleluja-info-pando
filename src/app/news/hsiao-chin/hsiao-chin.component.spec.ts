import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsiaoChinComponent } from './hsiao-chin.component';

describe('HsiaoChinComponent', () => {
  let component: HsiaoChinComponent;
  let fixture: ComponentFixture<HsiaoChinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsiaoChinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsiaoChinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
