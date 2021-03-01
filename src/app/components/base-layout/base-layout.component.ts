import { Component} from '@angular/core';
import { ScoreService } from 'app/services/score/score.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {

  constructor(private scoreService: ScoreService) {}
  public isModalShown = false;
  public currentSign = '';
  public isGameRunning = false;
  toggleModal(): void{
    this.isModalShown = !this.isModalShown;
  }
  selectItem(value: string): void{
    this.currentSign = value;
    this.isGameRunning = true;
  }
  replay(): void{
    this.isGameRunning = !this.isGameRunning;
  }
}
