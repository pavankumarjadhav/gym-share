import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WorkoutPlanComponent } from './workout-plan.component';

const routes: Routes = [
  {
    path: '',
    component:WorkoutPlanComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class workoutPlanRoutingModule {}
