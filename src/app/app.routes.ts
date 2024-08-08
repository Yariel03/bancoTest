import { Routes } from '@angular/router';
import { PgMainComponent } from './crud/pages/pg-main/pg-main.component';
import { PgNewProdutComponent } from './crud/pages/pg-new-produt/pg-new-produt.component';

export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: PgMainComponent},
    {path: 'new', component: PgNewProdutComponent},


];
