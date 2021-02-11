import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagonoexitosoPage } from './pagonoexitoso.page';

const routes: Routes = [
  {
    path: '',
    component: PagonoexitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagonoexitosoPageRoutingModule {}
