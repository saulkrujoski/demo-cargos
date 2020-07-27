import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntidadDeleteComponent } from './tipo-entidad-delete.component';

describe('TipoEntidadDeleteComponent', () => {
  let component: TipoEntidadDeleteComponent;
  let fixture: ComponentFixture<TipoEntidadDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEntidadDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntidadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
