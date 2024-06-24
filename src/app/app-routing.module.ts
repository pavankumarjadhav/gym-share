import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GptPlaygroundComponent } from './gpt-playground/gpt-playground.component';
import { GymRoutineListComponent } from './gym-routine-list/gym-routine-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout-plan',
    pathMatch: 'full'
  },
  {
    path: 'workout-plan',
    loadChildren: () => import('./workout-plan/workout-plan.module').then( m => m.WorkoutPlanModule)
  },
  {
    path:'gpt',
    component:GptPlaygroundComponent
  },
  {
    path:'routine',
    component:GymRoutineListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
