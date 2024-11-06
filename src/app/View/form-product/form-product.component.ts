import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductDataService } from 'src/app/Services/product-data.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductDomain } from 'src/Domain/ProductDomain';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup

  @Input() data: ProductDomain | undefined

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  fb: FormBuilder = inject(FormBuilder)

  isLoading: boolean = false;

  service: ProductDataService = inject(ProductDataService)

  categories!: string[];

  router: Router = inject(Router)

  ngOnInit(): void {
    this.service.ListCategories().subscribe((item) => {
      this.categories = item
    })

    if (this.data) {
      this.form = new FormGroup({
        title: new FormControl(this.data.title, { nonNullable: true, validators: [Validators.required] }),
        description: new FormControl(this.data.description, { nonNullable: true, validators: [Validators.required] }),
        category: new FormControl(this.data.category, { nonNullable: true, validators: [Validators.required] }),
        price: new FormControl(this.data.price, { nonNullable: true, validators: [Validators.required] }),
        discountPercentage: new FormControl(this.data.discountPercentage, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(100)] }),
        rating: new FormControl(this.data.rating, { nonNullable: true, validators: [Validators.required] }),
        stock: new FormControl(this.data.stock, { nonNullable: true, validators: [Validators.required] }),
        brand: new FormControl(this.data.brand, { nonNullable: true, validators: [Validators.required] }),
        sku: new FormControl(this.data.sku, { nonNullable: true, validators: [Validators.required] })
      })
    }
    else {
      this.form = new FormGroup({
        title: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        description: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        category: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        price: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        discountPercentage: new FormControl(null, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(100)] }),
        rating: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        stock: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        brand: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
        sku: new FormControl(null, { nonNullable: true, validators: [Validators.required] })
      })
    }
  }

  submit() {
    if (this.form.valid) {
      this.isLoading = true;
      if (!this.data) {
        this.service.createProduct(this.form.value).subscribe(() => {
          this.isLoading = false;
          this.toast('Created Product')
        },
          (error) => {
            this.isLoading = false;
            this.toast('Error to Create Product')
          })
      }
      else {
        this.service.UpdateProduct(this.form.value, this.data.id).subscribe(() => {
          this.isLoading = false;
          this.toast('Updated Product')
          this.router.navigate([''])
        },
          (error) => {
            this.isLoading = false;
            this.toast('Error to Update Product')
          })
      }
    }
  }

  redirectToPage() {
    this.router.navigate(['']);
  }

  toast(message: string) {
    this._snackBar.open(message, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
