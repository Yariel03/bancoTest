import { EventEmitter, Injectable } from '@angular/core';
import { ICreditCard } from '../interfaces/IProducts.interface';

@Injectable({
  providedIn: 'root',
})
export class Estados {
  product = new EventEmitter<ICreditCard>();

  constructor() {}

  setProduct(product: ICreditCard) {
    this.product.emit(product);
  }

  getProduct() {
    return this.product;
  }
}
