import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { Observable } from 'rxjs';
import { ShowMoreComponent } from './show-more/show-more.component';

@Injectable({
  providedIn: 'root'
})
export class ShowMoreService {

  readonly dialog = inject(MatDialog);

  openDialog(data: ProductDomain): void {
    const dialog = this.dialog.open(ShowMoreComponent, {
      width: '30%',
      data: data
    })
  }
}
