import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalcercaPage } from './sucursalcerca.page';

const routes: Routes = [
  {
    path: '',
    component: SucursalcercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalcercaPageRoutingModule {}
