import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IRadiobtn } from 'src/app/model/workout.model';

@Component({
  selector: 'app-que-two',
  templateUrl: './que-two.component.html',
  styleUrls: ['./que-two.component.scss']
})
export class QueTwoComponent {
  @Input() workoutForm:FormGroup;
  workoutDatList:IRadiobtn[]=[{
    label:'1 day',
    value:'1-day'
  },
  {
    label:'2-3 days',
    value:'2-3 days'
  },
  {
    label:'4-6 days',
    value:'4-6 days'
  },
  {
    label:'7 days',
    value:'7 days'
  }]
  constructor() { }

}
