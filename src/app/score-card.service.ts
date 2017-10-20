import { ScoreCard } from './score-card';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ScoreCardService {

  constructor(private http: Http) { }

  public getScoreCards(search ?: string) {
    return this.http.get('http://localhost:8080/scorecards?' + search ).map(res => {
      return res.json().map(scoreCard => Object.assign(new ScoreCard(), scoreCard));
    });
  }
}
