import { TestBed } from '@angular/core/testing';

import { ServicioTipoCargoService } from './servicio-tipo-cargo.service';

describe('ServicioTipoCargoService', () => {
  let service: ServicioTipoCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTipoCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
