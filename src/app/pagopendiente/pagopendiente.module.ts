import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagopendientePageRoutingModule } from './pagopendiente-routing.module';

import { PagopendientePage } from './pagopendiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagopendientePageRoutingModule
  ],
  declarations: [PagopendientePage]
})
export class PagopendientePageModule {}
