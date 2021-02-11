import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
      public loadingController: LoadingController
  ) { }

  showLoader() {
    this.loadingController.create({
      message: 'Nuestra App necesitar estar conectada a internet para ofrecerte un mejor servicio.<br><br>Esperando conexión a internet'
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {

    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }
}
