import { TestBed, async, inject } from '@angular/core/testing';

import { EnableHeroPageGuard } from './enable-hero-page.guard';

describe('EnableHeroPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnableHeroPageGuard]
    });
  });

  it('should ...', inject([EnableHeroPageGuard], (guard: EnableHeroPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
