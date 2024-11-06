import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  router: Router = inject(Router)

  route: ActivatedRoute = inject(ActivatedRoute)

  productId = this.route.snapshot.paramMap.get('id');

  service: ProductDataService = inject(ProductDataService)

  product: ProductDomain | undefined;

  ngOnInit(): void {

    if (Number(this.productId)) {
      this.service.getProductById(this.productId as string).subscribe(item => {
        this.product = item
      }, (error) =>{
        this.router.navigate(['**'])
      })
    }
  }

}
