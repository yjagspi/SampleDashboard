import { TestBed } from '@angular/core/testing';

import { ScatterDataServiceService } from './scatter-data-service.service';

describe('ScatterDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScatterDataServiceService = TestBed.get(ScatterDataServiceService);
    expect(service).toBeTruthy();
  });
});
