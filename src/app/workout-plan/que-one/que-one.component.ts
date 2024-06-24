import { Component, Input, OnInit, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Iplan } from 'src/app/model/workout.model';

@Component({
  selector: 'app-que-one',
  templateUrl: './que-one.component.html',
  styleUrls: ['./que-one.component.scss']
})
export class QueOneComponent {
 @Input() workoutForm:FormGroup;
 planList:Iplan[]=[{
  label:'AI generated plan',
  sublabel:'Let our ai create paln for you',
  iconname:'sparkles-outline',
  value:'ai_plan'
 },
 {
  label:'Select existing plan',
  sublabel:'Attach a plan you are already created',
  iconname:'document-attach-outline',
  value:'existing_plan'
 },
 {
  label:'Create new plan',
  sublabel:'Build a new workout plan froms scratch',
  iconname:'add-outline',
  value:'new_plan'
 }]
  constructor() { }

}
