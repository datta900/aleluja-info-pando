import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammaComponent } from './mamma.component';

describe('MammaComponent', () => {
  let component: MammaComponent;
  let fixture: ComponentFixture<MammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
