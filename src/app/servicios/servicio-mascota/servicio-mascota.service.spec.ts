import { TestBed } from '@angular/core/testing';

import { ServicioMascotaService } from './servicio-mascota.service';

describe('ServicioMascotaService', () => {
  let service: ServicioMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
