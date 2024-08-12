import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICreditCard, IResponse } from '../interfaces/IProducts.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwBancoService {
  SERVER: string = environment.SERVER_URL;
  _http = inject(HttpClient);
  private apiUrl = 'http://localhost:3002/bp/products';

  constructor() {}

  getProductos(): Observable<IResponse<ICreditCard>> {
    console.log(`${this.SERVER}/bp/products`, `${this.SERVER}/bp/products`);
    return this._http.get<IResponse<ICreditCard>>(`${this.SERVER}/bp/products`);
  }
}
