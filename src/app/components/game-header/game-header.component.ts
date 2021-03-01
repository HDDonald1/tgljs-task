import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScoreService } from 'app/services/score/score.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss']
})
export class GameHeaderComponent implements OnInit, OnDestroy {
  public score = 0;
  private eventSubscription: Subscription;
  public scoreDir = '';
  constructor(private scoreService: ScoreService){}
  ngOnInit(): void {
    this.eventSubscription = this.scoreService.getScore().subscribe(score => {
      if (this.score > score){
        this.scoreDir = 'decreased';
      }else if (this.score < score && this.score !== 0){
        this.scoreDir = 'increased';
      }else{
        this.scoreDir = '';
      }
      setTimeout(() => {if (this.scoreDir) {this.scoreDir = ''; }}, 2000);
      this.score = score;
    });
  }
  ngOnDestroy(): void{
    this.eventSubscription.unsubscribe();
  }

}
