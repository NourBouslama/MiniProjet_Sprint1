import { TestBed, async, inject } from '@angular/core/testing';

import { ProprietaireGuard } from './proprietaire.guard';

describe('ProprietaireGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProprietaireGuard]
    });
  });

  it('should ...', inject([ProprietaireGuard], (guard: ProprietaireGuard) => {
    expect(guard).toBeTruthy();
  }));
});
