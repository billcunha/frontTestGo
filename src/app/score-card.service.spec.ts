import { TestBed, inject } from '@angular/core/testing';

import { ScoreCardService } from './score-card.service';

describe('ScoreCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreCardService]
    });
  });

  it('should be created', inject([ScoreCardService], (service: ScoreCardService) => {
    expect(service).toBeTruthy();
  }));
});
