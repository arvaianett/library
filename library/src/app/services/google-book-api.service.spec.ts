import { TestBed } from '@angular/core/testing';

import { GoogleBookAPIService } from './google-book-api.service';

describe('GoogleBookAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleBookAPIService = TestBed.get(GoogleBookAPIService);
    expect(service).toBeTruthy();
  });
});
