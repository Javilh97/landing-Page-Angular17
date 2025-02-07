import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../pages/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProductById(id: number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`)
  }

}
