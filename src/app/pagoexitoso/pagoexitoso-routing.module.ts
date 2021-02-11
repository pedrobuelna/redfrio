import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoexitosoPage } from './pagoexitoso.page';

const routes: Routes = [
  {
    path: '',
    component: PagoexitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoexitosoPageRoutingModule {}
