import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-resultadobusqueda',
  templateUrl: './resultadobusqueda.page.html',
  styleUrls: ['./resultadobusqueda.page.scss'],
})
export class ResultadobusquedaPage implements OnInit {

  constructor(private router: Router, private taskService: TaskService,
    private route: ActivatedRoute, private nativeStorage: NativeStorage) { }
  consultaBusqueda:any;
  productos:any;
  notificaciones: any;
  cantidadNot: any = 0;
  cantidadActualCarrito: number;
  listas: any;
  ngOnInit() {
    
  }
  
  ionViewWillEnter() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: " + app.uuid_cliente);
                this.taskService.getNotificaciones(app.uuid_cliente)
                    .subscribe(notificaciones => {
                        this.listas = notificaciones;
                    });
                this.taskService.getNotificacionesNoLeidas(app.uuid_cliente)
                .subscribe(notificaciones => {
                    this.notificaciones = notificaciones;
                    this.cantidadNot = this.notificaciones.length
                });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
        this.nativeStorage.getItem('carrito')
            .then(
                data => {
                    console.log("WILL ENTER -->Se actualizo cantidad carrito ===>" + data.cantidad);
                    this.cantidadActualCarrito = data.cantidad;
                    if (data.cantidad == 0) {
                        $(".carrito").hide();
                    } else {
                        $(".carrito").show();
                    }
                },
                error => {
                    $(".carrito").hide();
                    console.error(error);
                }
            );
    this.route.queryParams.subscribe(queryParams => this.consultaBusqueda = queryParams.consultaBusqueda);
    console.log("Cachado: "+this.consultaBusqueda)
    this.taskService.getBusquedaProductos(this.consultaBusqueda)
    .subscribe(productos => {
        this.productos = productos;
        console.log("Productos: "+this.productos)
    });

  }
  onclickNotificaciones() {
      this.router.navigate(['/notificaciones']);
  }
  onclickUbicaciones() {
      this.router.navigate(['/ubicaciones']);
  }
  onclickMenu() {
      this.router.navigate(['/principal']);
  }
  onclickCategorias() {
      this.router.navigate(['/categorias']);
  }
  onclickUsuario() {
      this.router.navigate(['/editarperfil']);
  }
  onclickProducto(id) {
      this.router.navigate(['/producto'], {
          queryParams: {
              id: id
          }
      });
  }
  onClickCarrito() {
      this.router.navigate(['/carrito']);
  }
}