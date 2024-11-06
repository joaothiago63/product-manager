import { Component, OnInit, inject } from '@angular/core';
import { Input } from '@angular/core';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { Router } from '@angular/router';
import { DeleteProductService } from 'src/app/Dialogs/delete-product.service';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowMoreService } from 'src/app/Dialogs/show-more.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product!: ProductDomain

  router: Router = inject(Router)

  deleteDialog: DeleteProductService = inject(DeleteProductService)

  showMoreDialog: ShowMoreService = inject(ShowMoreService)

  service: ProductDataService = inject(ProductDataService)

  @Input() hasFilter: boolean = false

  private _snackBar = inject(MatSnackBar);

  toast(message: string) {
    this._snackBar.open(message, 'close');
  }

  ngOnInit(): void {
  }

  calculateDiscount(): number {
    return this.product.price - ((this.product.price * this.product.discountPercentage) / 100)
  }

  edit() {
    this.router.navigate(['edit', this.product.id])
  }

  showMore() {
    this.showMoreDialog.openDialog(this.product)
  }

  delete() {
    this.deleteDialog.openDialog(this.product).subscribe(item => {
      if (item) {
        this.service.deleteProduct(this.product.id).subscribe(x => {
          this.toast('product deleted')
        },
          (error) => {
            this.toast('error to delete the product')
          })
      }
    })
  }

}
