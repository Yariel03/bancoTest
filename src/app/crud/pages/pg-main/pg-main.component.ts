import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CAvatarComponent } from '../../components/c-avatar/c-avatar.component';
import { SwBancoService } from '../../../services/sw-banco.service';
import {
  ICreditCard,
  IResponse,
} from '../../../interfaces/IProducts.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CModalComponent } from '../../components/c-modal/c-modal.component';
import { Estados } from '../../../services/estados';
import { delay } from 'rxjs';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'pg-main',
  standalone: true,
  imports: [CAvatarComponent, FormsModule, CModalComponent],
  templateUrl: './pg-main.component.html',
  styleUrl: './pg-main.component.css',
})
export class PgMainComponent {
  @ViewChild(CModalComponent) modal: any;
  isloading: boolean = false;
  swBanco = inject(SwBancoService);
  router = inject(Router);
  stateProduct = inject(Estados);
  products: ICreditCard[] = [] as ICreditCard[];
  cpyProducts: ICreditCard[] = [] as ICreditCard[];

  dataFilter: string = '';
  viewData: number = 5;

  constructor() {
    this.swBanco
      .getProductos()
      .pipe(delay(1500))
      .subscribe((res: IResponse<ICreditCard>) => {
        this.isloading = true;
        this.products = res.data;
        this.cpyProducts = res.data;
        this.selectView();
        console.log('this.products: ', this.products);
      });
  }

  ngOnInit() {}

  newProduct() {
    this.router.navigate(['/new']);
  }

  search() {
    setTimeout(() => {
      console.log('search' + this.dataFilter);
      this.products = Utils.filterProducts(this.products, this.dataFilter);
    }, 500);
  }

  selectView() {
    this.products = this.cpyProducts.slice(0, this.viewData);
  }

  edit(id: string) {
    this.router.navigate(['/edit/', id]);
  }

  delete(id: string) {
    let data = this.products.filter((product) => product?.id == id);
    console.log('data: ', data);
    this.stateProduct.setProduct(data[0]); // setProduct

    this.modal.open();

    // mostrarmodal
  }

  isDelete(event: boolean) {
    console.log('event: ', event);
    if (event) {
      this.swBanco.getProductos().subscribe((res: IResponse<ICreditCard>) => {
        this.products = res.data;
        this.cpyProducts = res.data;
        this.selectView();
        console.log('this.products: ', this.products);
      });
    }
  }
}
