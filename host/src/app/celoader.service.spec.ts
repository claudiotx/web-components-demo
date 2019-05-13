import { TestBed } from '@angular/core/testing';

import { CeloaderService } from './celoader.service';

describe('CeloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeloaderService = TestBed.get(CeloaderService);
    expect(service).toBeTruthy();
  });
});
