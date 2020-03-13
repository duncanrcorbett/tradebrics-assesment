import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SuccessDialogComponent} from '../modals/success-dialog/success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  selected = '+27';
  smallScreen: boolean;
  colLength = 1;

  constructor(public dialog: MatDialog) {
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

  onResize(event) {
    this.smallScreen = (event.target.innerWidth <= 400) ? true : false;
    if (this.smallScreen) {
      this.colLength = 2;
    } else {
      this.colLength = 1;
    }

  }


  ngOnInit() {
    this.smallScreen = (window.innerWidth <= 400) ? true : false;
    if (this.smallScreen) {
      this.colLength = 2;
    } else {
      this.colLength = 1;
    }
  }

  cancel(event) {
    event.preventDefault();
  }

  uploadImage(event) {
    event.preventDefault();
  }

  imagelength() {
   if (this.smallScreen) {
     return 'A logo helps...';
   } else {
     return 'A logo helps personalize your account';
   }
  }

  onSubmit() {
    this.openDialog();
  }

  openDialog(): void {
    debugger;
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      data: {form: this.registerForm.value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}


