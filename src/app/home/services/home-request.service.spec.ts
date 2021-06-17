import { TestBed } from '@angular/core/testing';

import { HomeRequestService } from './home-request.service';

describe('HomeRequestService', () => {
  let service: HomeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
