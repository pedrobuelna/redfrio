import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalMobilePageRoutingModule } from './paypal-mobile-routing.module';

import { PaypalMobilePage } from './paypal-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalMobilePageRoutingModule
  ],
  declarations: [PaypalMobilePage]
})
export class PaypalMobilePageModule {}
