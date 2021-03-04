import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialdetallepedidosPage } from './historialdetallepedidos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialdetallepedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialdetallepedidosPageRoutingModule {}
