import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  InputTextModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
