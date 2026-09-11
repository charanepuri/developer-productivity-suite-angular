import { TestBed } from '@angular/core/testing';

import { RecentTools } from './recent-tools';

describe('RecentTools', () => {
  let service: RecentTools;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentTools);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
