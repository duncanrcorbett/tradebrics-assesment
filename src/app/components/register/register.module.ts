import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';
import {MatButtonModule, MatGridListModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {HeaderComponent} from '../header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SuccessModule} from '../modals/success-dialog/success-dialog.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    SuccessModule


  ],
  declarations: [RegisterComponent,
    HeaderComponent
    ]
})
export class RegisterModule {}
