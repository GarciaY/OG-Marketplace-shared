import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormBuilder,
        Validators
      } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public barangay:string;

  constructor(private fb: FormBuilder) { }

  get fullname() {
    return this.profileForm.get('fullname');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get contactNumber() {
    return this.profileForm.get('contactNumber');
  }

  get street(){
    return this.profileForm.get('street');
  }

  get password() {
    return this.profileForm.get('password');
  }


  profileForm = this.fb.group({
    fullname: ['', [Validators.required, Validators.maxLength(30)]],

    email: [
      '', 
    [ 
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]
    ],
   
    contactNumber: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],

    // address: this.fb.group({
      street: [
        '', 
        [
          Validators.required, 
          Validators.maxLength(30)
        ]
      ],
    // }),

    password: [
      '', 
      [
        Validators.required,
        Validators.maxLength(20)
      ]
    ],

  });

  

  public errorMessages = {
    fullname: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name should not be longer than 30 characters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],

    contactNumber: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],

    street: [
      { type: 'required', message: 'Street name is required' },
      { type: 'maxlength', message: 'Street name cant be longer than 30 characters'}
    ],

    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password should not exceed at 20 characters'}
    
      
    ]
  };



  ngOnInit() {
  }

  selectedBarangay(e){

    console.log(e);
    console.log(this.barangay);

  }
  onSubmit(){
    console.log(this.profileForm.value)
  }
}
