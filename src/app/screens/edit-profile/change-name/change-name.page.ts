import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {

  constructor(private fb: FormBuilder) { }

  get fullname() {
    return this.profileForm.get('fullname');
  }

  
  profileForm = this.fb.group({
    fullname: ['', [Validators.required, Validators.maxLength(30)]],
  });

  public errorMessages = {
    fullname: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name should not be longer than 30 characters' }
    ],
  };

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
