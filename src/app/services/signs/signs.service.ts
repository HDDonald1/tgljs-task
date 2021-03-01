import { Injectable } from '@angular/core';
import { Rule } from 'app/models/rule';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignsService {

  private rules = new BehaviorSubject<Rule>({
    rock: ['lizard', 'scissors'],
    paper: ['rock', 'spock'],
    scissors: ['lizard', 'paper'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  });

  private signs = new BehaviorSubject<string[]>(Object.keys(this.rules.value));

  getRules(): Observable<Rule>{
    return this.rules.asObservable();
  }
  getSigns(): Observable<string[]>{
    return this.signs.asObservable();
  }
}
