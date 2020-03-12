import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  selected = '+27';

  constructor() {
    this.registerForm = new FormGroup({
      businessName : new FormControl('', [Validators.required]),
      legalBusinessName : new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      businessEntity: new FormControl('', [Validators.required]),
      businessRegistration: new FormControl('', [Validators.required]),
      businessVAT: new FormControl('', [Validators.required]),
      businessOverview: new FormControl(''),
      businessEmail: new FormControl('', [Validators.required]),
      TelephoneArea: new FormControl(''),
      TelephoneNumber: new FormControl(''),
      city: new FormControl(''),
      suburb: new FormControl(''),
      street: new FormControl(''),
      appSuiteOther: new FormControl(''),
      postal: new FormControl('')

    });
  }


  ngOnInit() {
  }

  cancel(event) {
    event.preventDefault();
  }

  uploadImage(event){
    event.preventDefault();
  }

}
