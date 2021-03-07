import { Component, OnInit } from '@angular/core';

import { Braintree, ApplePayOptions, PaymentUIOptions,PaymentUIResult } from '@ionic-native/braintree/ngx';

@Component({
  selector: 'app-braintree',
  templateUrl: './braintree.page.html',
  styleUrls: ['./braintree.page.scss'],
})
export class BraintreePage implements OnInit {
  paymentOptions: PaymentUIOptions;
  constructor(public braintree: Braintree) { }

  ngOnInit() {

    this.paymentOptions = {
      amount: "20",
      primaryDescription: 'You currently paying for purchased items ',
     };
 
     this.braintree.initialize("1230123")
      .then(() => this.braintree.presentDropInPaymentUI(this.paymentOptions))
      .then((result: PaymentUIResult) => {
          console.log(result.nonce)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  
}
