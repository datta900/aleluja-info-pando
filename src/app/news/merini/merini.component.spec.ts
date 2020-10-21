import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriniComponent } from './merini.component';

describe('MeriniComponent', () => {
  let component: MeriniComponent;
  let fixture: ComponentFixture<MeriniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeriniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeriniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
