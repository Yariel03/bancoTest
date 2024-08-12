import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICreditCard } from '../../../interfaces/IProducts.interface';
import { Estados } from '../../../services/estados';
import { SwBancoService } from '../../../services/sw-banco.service';

@Component({
  selector: 'c-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './c-modal.component.html',
  styleUrl: './c-modal.component.css',
})
export class CModalComponent {
  isDelete = output<boolean>();
  stateProduct = inject(Estados);
  swProduct = inject(SwBancoService);

  constructor() {
    this.stateProduct.getProduct().subscribe((product) => {
      this.producto = product;
    });
  }
  isVisible = false;
  @Input() producto: ICreditCard = {} as ICreditCard;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  delete() {
    this.swProduct.deleteProduct(this.producto.id).subscribe((res) => {
      console.log('res: ', res);
      if (res.message === 'Product removed successfully') {
        this.isDelete.emit(true);
      }
      this.close();
    });
  }
}
