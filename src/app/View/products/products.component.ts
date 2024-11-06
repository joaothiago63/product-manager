import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  limit: number = 4

  skip: number = 0

  Tempskip: number = 0

  data: ProductDomain[] = []

  Tempdata: ProductDomain[] = []

  products: ProductDomain[] = []

  categories: string[] = []

  service: ProductDataService = inject(ProductDataService)

  totalPage: number = 0

  router: Router = inject(Router)

  filter: string = ''

  hasFilter: boolean = false;

  filterCategory: string = ''

  ngOnInit(): void {

    this.service.ListCategories().subscribe(item => {
      this.categories = item
      this.reload()
    })

    this.service.getAllProducts().subscribe(item => {
      this.products = item;
    })
  }

  reload(): void {
    this.service.ListProducts(this.skip, this.limit).subscribe(item => {
      this.totalPage = item.total
      this.data = item.products
      this.Tempdata = item.products
      this.Tempskip = this.skip
    })


  }

  onPageChange(event: PageEvent): void {
    this.skip = event.pageIndex
    if (this.filter || this.filterCategory) this.search()
    else
      this.reload()
  }

  redirectToPage(): void {
    this.router.navigate(['create'])
  }

  search() {
    if (this.filter) {
      this.service.getProductByTitleOrDescription(this.filter, this.skip, this.limit).subscribe(item => {
        this.data = item.products
        this.totalPage = item.total
        this.hasFilter = true;
      })
    }
    else if (this.filterCategory) {
      this.service.getProductByCategory(this.filterCategory, this.skip, this.limit).subscribe(item => {
        this.data = item.products
        this.totalPage = item.total
        this.hasFilter = true;
      })
    }
    else {
      this.reload()
      this.hasFilter = false;
    }
  }
}
