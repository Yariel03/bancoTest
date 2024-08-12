import { Routes } from '@angular/router';
import { PgMainComponent } from './crud/pages/pg-main/pg-main.component';
import { PgNewProdutComponent } from './crud/pages/pg-new-produt/pg-new-produt.component';
import { PgEditProductComponent } from './crud/pages/pg-edit-product/pg-edit-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: PgMainComponent },
  { path: 'new', component: PgNewProdutComponent },
  { path: 'edit/:id', component: PgEditProductComponent },
];
