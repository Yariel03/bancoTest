import { Component, inject, OnInit } from '@angular/core';
import { CAvatarComponent } from '../../components/c-avatar/c-avatar.component';
import { SwBancoService } from '../../../services/sw-banco.service';
import {
  ICreditCard,
  IResponse,
} from '../../../interfaces/IProducts.interface';

@Component({
  selector: 'pg-main',
  standalone: true,
  imports: [CAvatarComponent],
  templateUrl: './pg-main.component.html',
  styleUrl: './pg-main.component.css',
})
export class PgMainComponent {
  swBanco = inject(SwBancoService);
  products: ICreditCard[] = [] as ICreditCard[];

  ngOnInit() {
    console.log('OnInit');
  }

  async press() {
    // console.log('press');
    this.swBanco.getProductos().subscribe((res: IResponse<ICreditCard>) => {
      this.products = res.data;
      console.log('this.products: ', this.products);
    });
  }
  constructor() {}
}
