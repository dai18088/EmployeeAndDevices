import { TestBed } from '@angular/core/testing';

import { DevicemanagmentService } from './devicemanagment.service';

describe('DevicemanagmentService', () => {
  let service: DevicemanagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicemanagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
