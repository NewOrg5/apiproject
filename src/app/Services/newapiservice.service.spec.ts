import { TestBed } from '@angular/core/testing';

import { NewapiserviceService } from './newapiservice.service';

describe('NewapiserviceService', () => {
  let service: NewapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
