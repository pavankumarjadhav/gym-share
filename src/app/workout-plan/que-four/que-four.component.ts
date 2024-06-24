import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-que-four',
  templateUrl: './que-four.component.html',
  styleUrls: ['./que-four.component.scss']
})
export class QueFourComponent {
  @Input() workoutForm:FormGroup;
  constructor() { }

}
