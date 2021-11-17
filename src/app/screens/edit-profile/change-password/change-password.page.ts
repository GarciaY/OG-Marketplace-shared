import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  get password() {
    return this.profileForm.get('password');
  }
  profileForm = this.fb.group({
    

    password: [
      '', 
      [
        Validators.required,
        Validators.maxLength(20)
      ]
    ],
  });

  
  public errorMessages = {
   
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password should not exceed at 20 characters'} 
    ]
  };

  ngOnInit() {
  }

  
  onSubmit(){
    console.log(this.profileForm.value)
  }

}
