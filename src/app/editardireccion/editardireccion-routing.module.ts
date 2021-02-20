import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditardireccionPage } from './editardireccion.page';

const routes: Routes = [
  {
    path: '',
    component: EditardireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditardireccionPageRoutingModule {}
