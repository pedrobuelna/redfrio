import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  constructor(
        private router: Router,
        private taskService: TaskService,
        private nativeStorage: NativeStorage    
    ) { }

  familias:any;
  cantidadActualCarrito:any;
  notificaciones: any;
  cantidadNot: any = 0;
  listas: any;
  ngOnInit() {
    this.nativeStorage.getItem('app')
    .then(
        app => {
            console.log("==APP DATA==");
            console.log(app);
            console.log("uuid_cliente: " + app.uuid_cliente);
            this.taskService.getNotificaciones(app.uuid_cliente)
                .subscribe(notificaciones => {
                    this.listas = notificaciones;
                    //this.cantidadNot = this.notificaciones.length
                });
            this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
            .subscribe(notificaciones => {
                this.notificaciones = notificaciones;
                this.cantidadNot = this.notificaciones.length
            });
        },
        error => console.error("NO HAY UUID_CLIENTE")
    );
  }
  ionViewWillEnter(){
    this.nativeStorage.getItem('app')
    .then(
      app => {
          console.log("==APP DATA==");
          console.log(app);
          console.log("uuid_cliente: " + app.uuid_cliente);
          this.taskService.getNotificaciones(app.uuid_cliente)
              .subscribe(notificaciones => {
                  this.listas = notificaciones;
                  //this.cantidadNot = this.notificaciones.length
              });
          this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
          .subscribe(notificaciones => {
              this.notificaciones = notificaciones;
              this.cantidadNot = this.notificaciones.length
          });
      },
      error => console.error("NO HAY UUID_CLIENTE")
    );
  }
  ionViewDidEnter(){
    this.nativeStorage.getItem('carrito')
    .then(
        data => {
            console.log("WILL ENTER -->Se actualizo cantidad carrito ===>" + data.cantidad);
            this.cantidadActualCarrito = data.cantidad;
            if(data.cantidad==0){
                $(".carrito").hide();
            }else{
                $(".carrito").show();
            }
        },
        error => {
            $(".carrito").hide();
            console.error(error);
        }
    );
    this.taskService.getFamilias()
    .subscribe(familias => {
        this.familias = familias;
        console.log(familias);
    });
  }
  onclickNotificaciones(){
    this.router.navigate(['/notificaciones']);
  }
  onclickUbicaciones(){
    this.router.navigate(['/ubicaciones']);
  }
  onclickMenu(){
    this.router.navigate(['/principal']);
  }
  onclickAllCategoria(){
    this.router.navigate(['/categoria']);
  }
  onclickUsuario(){
    this.router.navigate(['/editarperfil']);
  }
  onclickCategoria(id){
      console.log("Familia==>");
      console.log(id);
    this.router.navigate(['/categoria'], {
      queryParams: {
          id: id
      }
    });
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
