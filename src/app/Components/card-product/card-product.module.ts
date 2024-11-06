import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [CardProductComponent],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [CardProductComponent]
})
export class CardProductModule { }
