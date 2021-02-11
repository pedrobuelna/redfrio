import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagoexitoso',
  templateUrl: './pagoexitoso.page.html',
  styleUrls: ['./pagoexitoso.page.scss'],
})
export class PagoexitosoPage implements OnInit {

  constructor(private  router:  Router,public navCtrl: NavController) { }

  ngOnInit() {
  }
  principal() {
    this.navCtrl.navigateRoot(['/principal']);
  }
}
