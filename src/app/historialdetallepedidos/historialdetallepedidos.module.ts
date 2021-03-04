import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialdetallepedidosPageRoutingModule } from './historialdetallepedidos-routing.module';

import { HistorialdetallepedidosPage } from './historialdetallepedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialdetallepedidosPageRoutingModule
  ],
  declarations: [HistorialdetallepedidosPage]
})
export class HistorialdetallepedidosPageModule {}
