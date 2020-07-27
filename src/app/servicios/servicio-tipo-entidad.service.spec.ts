import { TestBed } from '@angular/core/testing';

import { ServicioTipoEntidadService } from './servicio-tipo-entidad.service';

describe('ServicioTipoEntidadService', () => {
  let service: ServicioTipoEntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTipoEntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
