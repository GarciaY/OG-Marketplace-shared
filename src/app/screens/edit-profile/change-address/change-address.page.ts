import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {

  // public barangay: string;

  constructor(private fb: FormBuilder) { }

  get address(){
    return this.profileForm.get('address');
  }

  profileForm = this.fb.group({
    address: [
      '', 
      [
        Validators.required, 
        Validators.maxLength(30)
      ]
    ],
  });

  public errorMessages = {
    address: [
      { type: 'required', message: 'Address is required' },
      { type: 'maxlength', message: 'Your address cant be longer than 30 characters'}
    ],
  };

  ngOnInit() {
  }

  
  // selectedBarangay(e){

  //   console.log(e);
  //   console.log(this.barangay);

  // }
  onSubmit(){
    console.log(this.profileForm.value)
  }

}
