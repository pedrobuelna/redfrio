import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagonoexitoso',
  templateUrl: './pagonoexitoso.page.html',
  styleUrls: ['./pagonoexitoso.page.scss'],
})
export class PagonoexitosoPage implements OnInit {

  constructor(private  router:  Router,public navCtrl: NavController) { }

  ngOnInit() {
  }
  principal() {
    this.navCtrl.navigateRoot(['/principal']);
  }
}
