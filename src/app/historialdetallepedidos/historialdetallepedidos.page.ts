import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-historialdetallepedidos',
  templateUrl: './historialdetallepedidos.page.html',
  styleUrls: ['./historialdetallepedidos.page.scss'],
})
export class HistorialdetallepedidosPage implements OnInit {

  constructor(private taskService: TaskService,private nativeStorage: NativeStorage,
    private router: Router,private route: ActivatedRoute) { }
    detalle_pedidos:any;
    cantidadActualCarrito: number;
    cantidadNot: any = 0;
    notificaciones: any;
    listas: any;
    id_carrito:any;
    comprasubtotal:any;
    total:any;
    envio:any;
    iva:any;
    subtotalprincipal:any;
    ivaprincipal:any;
    totalx:any;
    totalx2:any = [];
  ngOnInit() {

  }
  onclickProducto(id) {
    this.router.navigate(['/producto'], {
        queryParams: {
            id: id
        }
    });
    }
  ionViewWillEnter() {
    this.route.queryParams.subscribe(queryParams => this.id_carrito = queryParams.id_carrito)
    console.log("PARAM CARRITOID: "+ this.id_carrito)
    this.taskService.getDetallePedidos(this.id_carrito)
    .subscribe(detalle_pedidos => { 
        let subtotal=0;
        for(let i = 0; i < detalle_pedidos.length; i++){
            // console.log("index a : " + i);
            // console.log(detalle_pedidos[i]);
            this.iva = detalle_pedidos[0].iva * 100;
            this.totalx = parseFloat(detalle_pedidos[i].subtotal.replace('$','').replace(',',''));
            // console.log("iva pe" + this.iva)
            // console.log("subtotal cada 1 " + this.totalx)
            if(this.iva==8){
                //this.totalx2[i] = this.totalx * 1.08
                this.totalx2[i] = this.totalx 
            }else{
                //this.totalx2[i] = this.totalx * 1.16
                this.totalx2[i] = this.totalx
            }
            //console.log("subtotal cada 1 sacado total" + this.totalx2[i])
            console.log("valor del costo de envio "+detalle_pedidos[i].costo_envio)
            if(detalle_pedidos[i].costo_envio == null){
                detalle_pedidos[i].costo_envio = 0
            }
            this.taskService.validarImg(detalle_pedidos[i].imagen).then(() => {
            }, e => {
                detalle_pedidos[i].imagen = "../../assets/images/Icono_Reacsa.png"
            });
            
        }
        detalle_pedidos.forEach(detalle => {
            console.log(detalle.subtotal.replace('$','').replace(',',''))
            subtotal+=parseFloat(detalle.subtotal.replace('$','').replace(',',''));
        });
        let tp=String(detalle_pedidos[0].costo_envio).replace('$','').replace(',','');
        this.envio = parseFloat(tp);
        this.comprasubtotal = subtotal/1.16;
        //this.iva=parseFloat(this.comprasubtotal)*.16;
        this.iva = detalle_pedidos[0].iva * 100;
        
        //this.total = subtotal + ( subtotal* detalle_pedidos[0].iva) + parseFloat(detalle_pedidos[0].costo_envio);
        
        //(subtotal + parseFloat(this.envio)) + ((subtotal + parseFloat(this.envio)) * .16);
        this.subtotalprincipal = subtotal + this.envio;
        this.total = this.subtotalprincipal + (this.subtotalprincipal* detalle_pedidos[0].iva)
        console.log("Total: "+this.subtotalprincipal)
        console.log("detalle_pedidos: ", detalle_pedidos)
        this.detalle_pedidos = detalle_pedidos
        console.log(this.detalle_pedidos[0]);

    });
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
  onClickCarrito() {
      this.router.navigate(['/carrito']);
  }
}
