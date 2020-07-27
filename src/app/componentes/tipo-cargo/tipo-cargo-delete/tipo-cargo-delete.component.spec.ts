import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCargoDeleteComponent } from './tipo-cargo-delete.component';

describe('TipoCargoDeleteComponent', () => {
  let component: TipoCargoDeleteComponent;
  let fixture: ComponentFixture<TipoCargoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCargoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCargoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
