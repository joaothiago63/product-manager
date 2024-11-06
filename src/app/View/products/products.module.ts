import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { CardProductModule } from 'src/app/Components/card-product/card-product.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
  { path: '', component: ProductsComponent }
];


@NgModule({
  declarations: [
    ProductsComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardProductModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ProductsModule { }

