import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {

  public barangay: string;

  constructor(private fb: FormBuilder) { }

  
  get street(){
    return this.profileForm.get('street');
  }

  profileForm = this.fb.group({
    street: [
      '', 
      [
        Validators.required, 
        Validators.maxLength(30)
      ]
    ],
  });

  public errorMessages = {
    street: [
      { type: 'required', message: 'Street name is required' },
      { type: 'maxlength', message: 'Street name cant be longer than 30 characters'}
    ],
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
