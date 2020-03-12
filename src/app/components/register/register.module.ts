import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material';

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
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {}
