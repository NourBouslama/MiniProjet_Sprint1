import { TestBed, async, inject } from '@angular/core/testing';

import { AnimalGuard } from './animal.guard';

describe('AnimalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalGuard]
    });
  });

  it('should ...', inject([AnimalGuard], (guard: AnimalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
