import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanComponent } from './workout-plan.component';
import { workoutPlanRoutingModule } from './workout-plan-routing.module';
import { QueOneComponent } from './que-one/que-one.component';
import { IonicModule } from '@ionic/angular';
import { QueTwoComponent } from './que-two/que-two.component';
import { QueThreeComponent } from './que-three/que-three.component';
import { QueFourComponent } from './que-four/que-four.component';
import { sharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import OpenAI from 'openai';

@NgModule({
  imports: [
    CommonModule,workoutPlanRoutingModule,IonicModule,sharedModule,ReactiveFormsModule,FormsModule
  ],
  declarations: [WorkoutPlanComponent,QueOneComponent,QueTwoComponent,QueThreeComponent,QueFourComponent],
  providers:[OpenAI]
})
export class WorkoutPlanModule { }
