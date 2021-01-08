import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {
  titulo: string;
  descripcion: string;
  url_imagen: string;
  fecha: string;
  constructor( private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.titulo = this.navParams.data.titulo;
    this.descripcion = this.navParams.data.descripcion;
    this.url_imagen = this.navParams.data.url_imagen;
    this.fecha = this.navParams.data.fecha;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
