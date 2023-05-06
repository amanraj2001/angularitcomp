import { TestBed } from '@angular/core/testing';

import { ExamdataService } from './examdata.service';

describe('ExamdataService', () => {
  let service: ExamdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
