import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductModule } from '../form-product/form-product.module';

const routes: Routes = [
  { path: '', component: CreateProductComponent }
];


@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormProductModule
  ]
})
export class CreateProductModule { }
