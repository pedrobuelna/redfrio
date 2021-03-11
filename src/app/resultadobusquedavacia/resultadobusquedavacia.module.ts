import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadobusquedavaciaPageRoutingModule } from './resultadobusquedavacia-routing.module';

import { ResultadobusquedavaciaPage } from './resultadobusquedavacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadobusquedavaciaPageRoutingModule
  ],
  declarations: [ResultadobusquedavaciaPage]
})
export class ResultadobusquedavaciaPageModule {}
