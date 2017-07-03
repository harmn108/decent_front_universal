import { TestBed, async, inject } from '@angular/core/testing';

import { HaveEmailGuard } from './have-email.guard';

describe('HaveEmailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaveEmailGuard]
    });
  });

  it('should ...', inject([HaveEmailGuard], (guard: HaveEmailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
