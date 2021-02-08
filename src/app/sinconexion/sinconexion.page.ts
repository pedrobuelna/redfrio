import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-sinconexion',
  templateUrl: './sinconexion.page.html',
  styleUrls: ['./sinconexion.page.scss'],
})
export class SinconexionPage implements OnInit {
  subscription:any;
  constructor(private network: Network,
    private platform: Platform,public navCtrl: NavController,) { 
    //   this.platform.ready().then(() => {
    //     let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //    console.log('network was disconnected :-(');
    //    alert("FirstPage onDisconnect");
    //   });
    //   disconnectSubscription.unsubscribe();
    //   let connectSubscription = this.network.onConnect().subscribe(() => {
    //    console.log('network was connected :-)');
    //    alert("FirstPage onConnect");
    //   });
    //   // stop connect watch
    //   connectSubscription.unsubscribe();
    //  });
  }

  ngOnInit() {
    // this.network.onConnect().subscribe(() => {
    //   console.log('network was connected :-) sinconexion');
    //   alert("FirstPage onConnect oninit sinconexion");
    //   this.navCtrl.back();
    //  });
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    })
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
