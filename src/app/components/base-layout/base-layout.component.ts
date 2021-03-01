import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'app/services/score/score.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor(private scoreService:ScoreService) {}
  public isModalShown:boolean = false;
  public currentSign:string = '';
  public isGameRunning:boolean = false;
  toggleModal(){
    this.isModalShown=!this.isModalShown;
    console.log(this.isModalShown)
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  selectItem(value:string){
    this.currentSign = value;
    this.isGameRunning = true;
  }
  replay():void{
    this.isGameRunning=!this.isGameRunning;
  }
}
