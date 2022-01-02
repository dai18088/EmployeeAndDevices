import { TestBed } from '@angular/core/testing';

import { EmployeemanagmentService } from './employeemanagment.service';

describe('EmployeemanagmentService', () => {
  let service: EmployeemanagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeemanagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
