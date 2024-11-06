import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductModule } from '../form-product/form-product.module';

const routes: Routes = [
  { path: '', component: EditProductComponent }
];

@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormProductModule
  ]
})
export class EditProductModule { }
