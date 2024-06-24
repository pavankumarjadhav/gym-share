import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() nextBtnClick= new EventEmitter();
  @Output() cancelBtnClick= new EventEmitter();
  constructor() { }
  nextAction()
  {
  this.nextBtnClick.emit();
  }
  cancelAction()
  {
  this.cancelBtnClick.emit();
  }

}
