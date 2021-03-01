import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent {

  constructor() { }
  @Input() close: () => void;
}
