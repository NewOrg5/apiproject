import { TestBed } from '@angular/core/testing';

import { ShowterrentsService } from './showterrents.service';

describe('ShowterrentsService', () => {
  let service: ShowterrentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowterrentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
