import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditardireccionPageRoutingModule } from './editardireccion-routing.module';

import { EditardireccionPage } from './editardireccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditardireccionPageRoutingModule
  ],
  declarations: [EditardireccionPage]
})
export class EditardireccionPageModule {}
