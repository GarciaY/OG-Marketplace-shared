import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {

  constructor(private fb: FormBuilder) { }

  get firstname() {
    return this.profileForm.get('firstname');
  }

  get lastname() {
    return this.profileForm.get('lastname');
  }
  
  profileForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.maxLength(30)]],
    lastname: ['', [Validators.required, Validators.maxLength(30)]],
  });

  public errorMessages = {
    firstname: [
      { type: 'required', message: 'First name is required' },
      { type: 'maxlength', message: 'First name should not be longer than 30 characters' }
    ],
    lastname: [
      { type: 'required', message: 'Last name is required' },
      { type: 'maxlength', message: 'Last name should not be longer than 30 characters' }
    ],
  };

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
