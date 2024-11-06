import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  readonly dialog = inject(MatDialog);

  openDialog(data: ProductDomain): Observable<boolean> {
    const dialog = this.dialog.open(DeleteProductComponent, {
      width: '30%',
      data: data
    })
    return dialog.afterClosed()
  }

}
