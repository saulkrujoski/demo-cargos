import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEntidadNewComponent } from './tipo-entidad-new.component';

describe('TipoEntidadNewComponent', () => {
  let component: TipoEntidadNewComponent;
  let fixture: ComponentFixture<TipoEntidadNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEntidadNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEntidadNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
