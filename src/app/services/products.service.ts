import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3000/api/produit');
  }

  getProductsById(productsId: number): Observable<Products>{
  return this.http.get<Products>(
`http://localhost:3000/api/produit/${productsId}`
  );
 }

  createProducts(products: Products): Observable<Products> {
    const headers = this.setHeaders();
    return this.http.post<Products>(
      `http://localhost:3000/api/produit`,
      products,
      { headers }
    );
  }

  updateProducts(productsId: number, products: Products): Observable<Products> {
    const headers = this.setHeaders();
    return this.http.patch<Products>(
      `http://localhost:3000/api/produit/${productsId}`,
      products,
      {
        headers,
      }
    );
  }

  deleteProducts(id: number): Observable<Products> {
    // recup le token dans le sessionstorage
    const headers = this.setHeaders();
    return this.http.delete<Products>(
      `http://localhost:3000/api/produit/${id}`,
      { headers }
    );
  }
}
