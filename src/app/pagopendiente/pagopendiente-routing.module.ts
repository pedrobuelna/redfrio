import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagopendientePage } from './pagopendiente.page';

const routes: Routes = [
  {
    path: '',
    component: PagopendientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagopendientePageRoutingModule {}
