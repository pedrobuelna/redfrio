import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinconexionPage } from './sinconexion.page';

const routes: Routes = [
  {
    path: '',
    component: SinconexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinconexionPageRoutingModule {}
