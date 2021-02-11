import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregardireccionPageRoutingModule } from './agregardireccion-routing.module';

import { AgregardireccionPage } from './agregardireccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregardireccionPageRoutingModule
  ],
  declarations: [AgregardireccionPage]
})
export class AgregardireccionPageModule {}
