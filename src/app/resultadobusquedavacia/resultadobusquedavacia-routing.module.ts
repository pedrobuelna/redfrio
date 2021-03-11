import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadobusquedavaciaPage } from './resultadobusquedavacia.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadobusquedavaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadobusquedavaciaPageRoutingModule {}
