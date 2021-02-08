import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinconexionPageRoutingModule } from './sinconexion-routing.module';

import { SinconexionPage } from './sinconexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinconexionPageRoutingModule
  ],
  declarations: [SinconexionPage]
})
export class SinconexionPageModule {}
