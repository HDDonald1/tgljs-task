import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Rule } from 'app/models/rule';
import { ScoreService } from 'app/services/score/score.service';
import { SignsService } from 'app/services/signs/signs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})

export class GameResultComponent implements OnInit, OnDestroy {
  @Input() sign: string;
  @Input() playAgain: () => void;
  constructor(private signsService: SignsService , private scoreService: ScoreService) { }
  public houseSign = 'unknown';
  public isGameFinished = false;
  public isPlayerWon = false;
  public rules: Rule = {};
  public signs: string[] = [];
  private subscriptions: Subscription[] = [];
  ngOnInit(): void {
    this.subscriptions.push(this.signsService.getRules().subscribe(v => this.rules = v));
    this.subscriptions.push(this.signsService.getSigns().subscribe(v => this.signs = v));
    this.play();
  }
  ngOnDestroy(): void{
    for (const subscription of this.subscriptions){
      subscription.unsubscribe();
    }
  }
  play(): void{
    const randomNumber = Math.round(Math.random() * 4);
    setTimeout(() => {this.houseSign = this.signs[randomNumber];
    }, 1500);
    setTimeout(() => {
      const isHouseWon = this.rules[this.houseSign].find((elem: any) => elem === this.sign);
      if (isHouseWon){
        this.isPlayerWon = false;
        this.scoreService.setScore(-1);
      }else{
        this.isPlayerWon = true;
        this.scoreService.setScore(1);
      }
      this.isGameFinished = true;
    }, 2000);
  }
}
