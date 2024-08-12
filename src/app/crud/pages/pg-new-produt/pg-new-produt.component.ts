import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SwBancoService } from '../../../services/sw-banco.service';
import { Utils } from '../../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'pg-new-produt',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pg-new-produt.component.html',
  styleUrl: './pg-new-produt.component.css',
})
export class PgNewProdutComponent {
  frmProduct: FormGroup = new FormGroup({});
  fb = inject(FormBuilder);
  isExist = signal(false);
  router = inject(Router);
  swProducts = inject(SwBancoService);
  fechaActual = new Date();

  // Suma un año (agrega 1 al año)
  fechaFuture = new Date(
    this.fechaActual.setFullYear(this.fechaActual.getFullYear() + 1)
  );

  constructor() {
    console.log(
      'date_release: ',
      this.fechaActual,
      'date_revision: ',
      this.fechaFuture
    );
    this.frmProduct = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      logo: ['', [Validators.required]],
      date_release: [
        Utils.formatDateToYYYYMMDD(this.fechaActual),
        [Validators.required],
      ],
      date_revision: [Utils.formatDateToYYYYMMDD(this.fechaFuture)],
    });
  }
  save() {
    if (this.frmProduct.invalid) {
      console.log('Invalid form');
      return;
    }
    this.swProducts.saveProduct(this.frmProduct.value).subscribe((res) => {
      console.log('Save', res);
      this.router.navigate(['/main']);
    });
  }

  restartFrm() {
    this.frmProduct.reset();
  }
  idValidation() {
    setTimeout(() => {
      this.swProducts
        .validationId(this.frmProduct.value.id)
        .subscribe((res) => {
          this.isExist.set(res ? true : false);
          // this.isxist = res.data ? true : false;
        });
    }, 1500);
  }

  dateValidation() {
    this.fechaActual = new Date(this.frmProduct.value.date_release);
    this.fechaFuture = new Date(
      this.fechaActual.setFullYear(this.fechaActual.getFullYear() + 1)
    );

    this.frmProduct.patchValue({
      date_revision: Utils.formatDateToYYYYMMDD(this.fechaFuture),
    });
  }
}
