import { TestBed } from '@angular/core/testing';

import { ShowMoreService } from './show-more.service';

describe('ShowMoreService', () => {
  let service: ShowMoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
