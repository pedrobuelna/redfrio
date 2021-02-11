import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoexitosoPageRoutingModule } from './pagoexitoso-routing.module';

import { PagoexitosoPage } from './pagoexitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoexitosoPageRoutingModule
  ],
  declarations: [PagoexitosoPage]
})
export class PagoexitosoPageModule {}
