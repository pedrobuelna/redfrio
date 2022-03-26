import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilUpdatePageRoutingModule } from './editarperfil-update-routing.module';

import { EditarperfilUpdatePage } from './editarperfil-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditarperfilUpdatePageRoutingModule
  ],
  declarations: [EditarperfilUpdatePage]
})
export class EditarperfilUpdatePageModule {}
