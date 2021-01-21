import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypal-mobile',
  templateUrl: './paypal-mobile.page.html',
  styleUrls: ['./paypal-mobile.page.scss'],
})
export class PaypalMobilePage implements OnInit {

  constructor(private payPal: PayPal) { }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '₹';
  ngOnInit() {
  }
  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'Af9_zR1K8wQc5MOod3Sr0knKhKUAQK48aGq6_n4SPLrQ-lnZxoyt-ySGV24UnRrW4NkDVAeBPtXYsKQm'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}
