import { TestBed } from '@angular/core/testing';

import { EventCoreService } from './event-core.service';

describe('EventCoreService', () => {
  let service: EventCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
