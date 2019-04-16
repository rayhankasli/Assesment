import { TestBed } from '@angular/core/testing';

import { ManageBankService } from './manage-bank.service';

describe('ManageBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageBankService = TestBed.get(ManageBankService);
    expect(service).toBeTruthy();
  });
});
