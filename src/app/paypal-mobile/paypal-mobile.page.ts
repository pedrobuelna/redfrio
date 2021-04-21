import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal-mobile',
  templateUrl: './paypal-mobile.page.html',
  styleUrls: ['./paypal-mobile.page.scss'],
})
export class PaypalMobilePage implements OnInit {

  constructor() { }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '₹';
  ngOnInit() {
  }
 

}
