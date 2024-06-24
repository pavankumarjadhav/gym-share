import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { }
  chestBackExercises = [
    { name: 'Bench Press', sets: 3, reps: '8-10' },
    { name: 'Bent-over Rows', sets: 3, reps: '8-10' },
    { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10' },
    { name: 'Lat Pulldown', sets: 3, reps: '8-10' }
  ];

  bicepsTricepsExercises = [
    { name: 'Bicep Curls', sets: 3, reps: '10-12' },
    { name: 'Tricep Dips', sets: 3, reps: '8-10' }
  ];
  backBtnClick()
  {
    this.router.navigate(['/workout-plan'])
  }

}
