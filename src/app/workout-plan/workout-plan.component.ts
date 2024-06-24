import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.css']
})
export class WorkoutPlanComponent implements OnInit{
  selectedQue: number = 1;
  workoutForm: FormGroup;
  headerList=[{
    title:'Add workout plan',
    subTitle:'Add a plan to your workout for improved results. Click next to skip.'
  },
  {
    title:'How often do you workout?',
    subTitle:'How many days per week do you plan on working out?'
  },
  {
    title:'Tell us about you',
    subTitle:'This information will help us create a custom workout plan for you.'
  },{
    title:'Tell us about your desired intensity level.',
    subTitle:'This information will help us determine specific elements of the workout'
  }]
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm()
  {
    this.workoutForm = this.fb.group({
      selectedPlan: [''],
      workoutFrequency: [''],
      heightInFit: [''],
      heightInInch: [''],
      weight: [''],
      age: [''],
      gender: [''],
      intensityLevel: ['']
    });
  }
  nextBtnClick() {
    console.log(this.workoutForm.value,"this.workoutForm")
    if(this.selectedQue==4)
      {
        this.router.navigate(['/gpt']);
      }
    if (this.selectedQue < 4) {
      this.selectedQue++
    }
  }
  cancelBtnClick()
  {
    this.selectedQue=1;
  }
  backBtnClick()
  {
    if (this.selectedQue > 1) {
      this.selectedQue=this.selectedQue-1;
    }
  }
}
