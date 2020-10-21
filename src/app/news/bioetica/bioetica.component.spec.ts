import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioeticaComponent } from './bioetica.component';

describe('BioeticaComponent', () => {
  let component: BioeticaComponent;
  let fixture: ComponentFixture<BioeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
