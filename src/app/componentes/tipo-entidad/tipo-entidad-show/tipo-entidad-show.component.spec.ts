import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntidadShowComponent } from './tipo-entidad-show.component';

describe('TipoEntidadShowComponent', () => {
  let component: TipoEntidadShowComponent;
  let fixture: ComponentFixture<TipoEntidadShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEntidadShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntidadShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
