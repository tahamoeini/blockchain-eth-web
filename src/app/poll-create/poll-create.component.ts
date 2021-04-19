import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent{
  pollForm: FormGroup;
  @Output() pollcreated: EventEmitter<PollForm> = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      question: this.fb.control('',[Validators.required]),
      image: this.fb.control(''),
      option1: this.fb.control(''),
      option2: this.fb.control(''),
      option3: this.fb.control(''),
    })
  }
  submitForm(){
    const formData: PollForm = {
      question: this.pollForm.get("question").value,
      thumbnail: this.pollForm.get("image").value,
      options: [
        this.pollForm.get("option1").value,
        this.pollForm.get("option2").value,
        this.pollForm.get("option3").value,
      ]
    };

    this.pollcreated.emit(formData)
  }
}
