import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDeleteComponent } from './cargo-delete.component';

describe('CargoDeleteComponent', () => {
  let component: CargoDeleteComponent;
  let fixture: ComponentFixture<CargoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
