import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./View/products/products.module').then(module => module.ProductsModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./View/create-product/create-product.module').then(module => module.CreateProductModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./View/edit-product/edit-product.module').then(module => module.EditProductModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule, MatSnackBarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
