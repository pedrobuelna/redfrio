import { Component, OnInit } from '@angular/core';
import{TaskService} from '../services/task.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {
  constructor(private taskService: TaskService,private nativeStorage: NativeStorage,public alertController: AlertController,
    private router: Router,private route: ActivatedRoute,public navCtrl: NavController,
    ) { }
  direcciones: any;
  ngOnInit() {
    this.nativeStorage.getItem('app')
    .then(
        app => {
            console.log("==APP DATA==");
            console.log(app);
            console.log("uuid_cliente: " + app.uuid_cliente);
            this.taskService.getDireccionCliente(app.uuid_cliente)
            .subscribe(direcciones => {
                this.direcciones = direcciones;
                console.log("direcciones: ", direcciones);
            });
        },
        error => console.error("NO HAY UUID_CLIENTE")
    );
  }
  onclickEditarDireccion(uuid_direccion){
    this.router.navigate(['/editardireccion'],{
      queryParams:{
        uuid_direccion:uuid_direccion
      }
    });
  }
  async presentAlert(uuid_direccion) {
    const alert = await this.alertController.create({
        cssClass: 'class_alert',
        header: 'Alerta!',
        //subHeader: 'Subtitle',
        message: 'Seguro que deseas eliminar direccion?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Buy clicked');
              this.onclickEliminarDireccion(uuid_direccion);
            }
          }
        ]
    });
    await alert.present();
  }
  onclickEliminarDireccion(uuid_direccion){
    this.taskService.deleteDireccion(uuid_direccion).subscribe(()=>{
      this.navCtrl.navigateRoot(['/editarperfil']);
    });
  }
}
