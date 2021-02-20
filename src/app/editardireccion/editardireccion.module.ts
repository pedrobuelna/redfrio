import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditardireccionPageRoutingModule } from './editardireccion-routing.module';

import { EditardireccionPage } from './editardireccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditardireccionPageRoutingModule
  ],
  declarations: [EditardireccionPage]
})
export class EditardireccionPageModule {}
