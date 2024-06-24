import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import OpenAI from 'openai';
import { sharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gpt-playground',
  templateUrl: './gpt-playground.component.html',
  styleUrls: ['./gpt-playground.component.scss'],
  standalone:true,
  imports: [
    CommonModule,IonicModule,sharedModule,FormsModule

  ]
})

export class GptPlaygroundComponent {
  openai
  optionChips=[
    {label:'Lose weight'},
    {label:'Build muscle'},
    {label:'Improve flexibility'},
    {label:'Get lean'},
    {label:'Increase speed'},
    {label:'Increase endurance'},
    {label:'Foundational Strength'},
    {label:'Mobility'}
  ]
  selectedChip:any=[];
  messageText:string='';
  constructor(private router:Router) {
     this.openai = new OpenAI({
      apiKey: environment.chatGpt_key, // This is the default and can be omitted
      dangerouslyAllowBrowser: true
    });
  }

  getGptRes()
  {
    this.getPromtOutput();
  }

  async getPromtOutput() {
    this.router.navigate(['/routine']);
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: 'user', content: this.messageText}],
      model: 'gpt-3.5-turbo',
      max_tokens:100,
      stream: false,
      response_format:{type:'json_object'}
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await this.openai.chat.completions.create(params);
    console.log(chatCompletion,"chatCompletion")
  }
  selectChip(chip: any, i: number) {
    if (this.selectedChip.findIndex((chipData: any) => chipData.label === chip.label) > -1) {
      this.selectedChip = this.selectedChip.filter((chipdata1: any) => { chipdata1.label != chip.label })
    }
    else {
      this.selectedChip.push(chip)
    }
  }
  backBtnClick()
  {
    this.router.navigate(['/workout-plan'])
  }
}
