import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcontrasenaPageRoutingModule } from './recuperarcontrasena-routing.module';

import { RecuperarcontrasenaPage } from './recuperarcontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarcontrasenaPageRoutingModule
  ],
  declarations: [RecuperarcontrasenaPage]
})
export class RecuperarcontrasenaPageModule {}
