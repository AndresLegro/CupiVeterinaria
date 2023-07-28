import { TestBed } from '@angular/core/testing';

import { ServicioCitaService } from './servicio-cita.service';

describe('ServicioCitaService', () => {
  let service: ServicioCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
