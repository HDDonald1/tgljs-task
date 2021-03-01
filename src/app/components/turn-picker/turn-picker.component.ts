import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SignsService } from 'app/services/signs/signs.service';

@Component({
  selector: 'app-turn-picker',
  templateUrl: './turn-picker.component.html',
  styleUrls: ['./turn-picker.component.scss']
})
export class TurnPickerComponent implements OnInit {
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  constructor(private signsService:SignsService) { }
  public signs:string[] = [];
  ngOnInit(): void {
    this.signsService.getSigns().subscribe(v=>this.signs=v)
  }
  pickSign(sign:string):void{
    this.onSelect.emit(sign);
  }
}
