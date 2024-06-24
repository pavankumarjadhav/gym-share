import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-que-three',
  templateUrl: './que-three.component.html',
  styleUrls: ['./que-three.component.scss']
})
export class QueThreeComponent  {
  @Input() workoutForm:FormGroup;
  constructor() { }


}
