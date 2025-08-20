import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
// export class ProductsSer {
 
// }
 
 
export class ProductsSerService {
  private apiUrl = 'https://fakestoreapi.com/products';
 
  constructor(private http: HttpClient) {}
 
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}