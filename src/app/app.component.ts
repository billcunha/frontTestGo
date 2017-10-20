import { Component, OnInit  } from '@angular/core';

import { ScoreCardService } from './score-card.service';
import { ScoreCard } from './score-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public scoreCards : ScoreCard[];

  constructor(
    private ScoreCardService: ScoreCardService
  ) {}

  ngOnInit() {
    this.updateScoreCards();
  }

  updateScoreCards (field ?: string, search ?: string){
    let query : string;
    if(field && search){
      query = field + '=' + search;
    }

    this.ScoreCardService.getScoreCards(query)
    .subscribe( result => {
      this.scoreCards = result;
    },
    err => console.log(err)
  );
  }
}
