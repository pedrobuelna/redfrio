import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagonoexitosoPageRoutingModule } from './pagonoexitoso-routing.module';

import { PagonoexitosoPage } from './pagonoexitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagonoexitosoPageRoutingModule
  ],
  declarations: [PagonoexitosoPage]
})
export class PagonoexitosoPageModule {}
