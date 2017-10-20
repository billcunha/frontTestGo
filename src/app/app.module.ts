import { Http, HttpModule } from '@angular/http';
import { ScoreCardService } from './score-card.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [ScoreCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
