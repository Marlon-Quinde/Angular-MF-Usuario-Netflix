import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [

    ReactiveFormsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class SharedModule { }
