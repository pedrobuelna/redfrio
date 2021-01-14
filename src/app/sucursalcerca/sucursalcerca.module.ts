import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucursalcercaPageRoutingModule } from './sucursalcerca-routing.module';

import { SucursalcercaPage } from './sucursalcerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucursalcercaPageRoutingModule
  ],
  declarations: [SucursalcercaPage]
})
export class SucursalcercaPageModule {}
