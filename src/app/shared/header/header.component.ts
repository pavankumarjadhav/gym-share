import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title:string;
  @Input() subTitle:string;
  @Output() backBtnClick = new EventEmitter();

  constructor() { }
  backBtnAction(){
    this.backBtnClick.emit();
  }
}
