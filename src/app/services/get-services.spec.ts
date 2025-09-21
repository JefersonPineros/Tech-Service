import { TestBed } from '@angular/core/testing';

import { GetServices } from './get-services';

describe('GetServices', () => {
  let service: GetServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
