import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDomain } from 'src/Domain/ProductDomain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  httpClient: HttpClient = inject(HttpClient);

  ListProducts(skip: number, limit: number): Observable<response> {
    return this.httpClient.get<response>(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  }

  ListCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`https://dummyjson.com/products/category-list`)
  }

  createProduct(payLoad: any): Observable<any> {
    return this.httpClient.post<any>(`https://dummyjson.com/products/add`, payLoad)
  }

  UpdateProduct(payLoad: any, id: string): Observable<any> {
    return this.httpClient.put<any>(`https://dummyjson.com/products/${id}`, payLoad)
  }

  getProductById(id: string): Observable<ProductDomain> {
    return this.httpClient.get<ProductDomain>(`https://dummyjson.com/products/${id}`)
  }

  getAllProducts(): Observable<ProductDomain[]> {
    return this.httpClient.get<ProductDomain[]>('https://dummyjson.com/products')
  }

  getProductByTitleOrDescription(query: string, skip: number, limit: number): Observable<response> {
    return this.httpClient.get<response>(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`)
  }

  getProductByCategory(category: string, skip: number, limit: number): Observable<response> {
    return this.httpClient.get<response>(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`)
  }

  deleteProduct(id: string): Observable<ProductDomain> {
    return this.httpClient.delete<ProductDomain>(`https://dummyjson.com/products/${id}`)
  }
}

export interface response {
  products: ProductDomain[],
  skip: number,
  limit: number,
  total: number
}