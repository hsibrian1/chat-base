import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {OrderListModule} from 'primeng/orderlist';
import {PickListModule} from 'primeng/picklist';


const MODULES = [
  InputTextModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  OrderListModule,
  PickListModule,
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
