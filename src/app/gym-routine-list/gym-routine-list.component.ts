import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { sharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-gym-routine-list',
  templateUrl: './gym-routine-list.component.html',
  styleUrls: ['./gym-routine-list.component.css'],
  standalone:true,
  imports: [
    CommonModule,IonicModule,sharedModule

  ]
})
export class GymRoutineListComponent {

  constructor() { }

}
