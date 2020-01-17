import { TestBed } from '@angular/core/testing';

import { StartupserviceService } from './startupservice.service';

describe('StartupserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupserviceService = TestBed.get(StartupserviceService);
    expect(service).toBeTruthy();
  });
});
