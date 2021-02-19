import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrado',
  templateUrl: './registrado.page.html',
  styleUrls: ['./registrado.page.scss'],
})
export class RegistradoPage implements OnInit {
  constructor(public navCtrl: NavController,public activatedRoute : ActivatedRoute) { 
  }
  nombreCompleto:any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.nombreCompleto = res.nombreCompleto;
    });
  }
  login() {
    this.navCtrl.navigateRoot(['/login']);
  }

}
