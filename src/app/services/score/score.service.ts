import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score = new BehaviorSubject<number>(+localStorage.getItem('score')||0);
  getScore():Observable<number>{
    return this.score.asObservable();
  }
  setScore(direction:number):void{
    this.score.next(this.score.value + direction);
    localStorage.setItem('score',this.score.value.toString());
  }
}
