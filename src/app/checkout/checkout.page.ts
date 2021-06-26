import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import {
    PayPal,
    PayPalPayment,
    PayPalConfiguration
} from '@ionic-native/paypal/ngx';
import {
    errorMonitor
} from 'events';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
import {
    TaskService
} from '../services/task.service';
import { NavController,Platform } from '@ionic/angular';

import {
    HttpClient,HttpHeaders
} from '@angular/common/http';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
    tipoEnvio:any;
    klo:any;
    costoEnvio: number;
    ionicForm: FormGroup;
    isSubmitted = false;
    myBoolean: boolean;
    myBoolean2: boolean;
    mostrarDireccion1: boolean;
    mostrarFactura: boolean;
    totalMp:any;
    calle2Required: boolean;
    paymentAmount: string = '3.33';
    paymentAmountEnvio: string;
    currency: string = 'MXN';
    currencyIcon: string = '$';
    tax: any = .16;
    iva:any=16;
    envio: any = 0;
    subtotal: any;
    total: any;
    totalEnvio: any;
    sucursales: any;
    direcciones:any;
    numeroTarjeta:any;
    fechaMesTarjeta:any;
    fechaAnoTarjeta:any;
    cvvTarjeta:any;
    totalCompra:number;
    uuid_notificacion: any;
    listas: any;
    notificaciones: any;
    cantidadNot: any = 0;
    cantidadOn:any;
    className: string = 'quitar';
    enviodireccion:any = "domicilio"
    mostrarDireccion:any = true;
    mostrarTienda:any = false;
    flag_inventario:any=null;
    flag_viable_paqueteria:any=null;
    mensajeInventario:string = "";
    mpData:any;
    uuidCarrito:any;
    uuidcliente:any;
    defaultSelectValue:any;
    @ViewChild("splash") splash: ElementRef;
    constructor(public alertController: AlertController,public platform: Platform,private http: HttpClient,public navCtrl: NavController,private route:ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private renderer: Renderer2, private nativeStorage: NativeStorage, private taskService: TaskService,) {
        
        this.costoEnvio = 20;
        this.mostrarDireccion1 = true;
        this.ionicForm = this.formBuilder.group({
            direccion: ['',[Validators.required]],
            myBoolean: ['true', []],
            myBoolean2: ['false', []],
            nombreTarjeta: ['', ],
            numeroTarjeta: ['', ],
            fechaMesTarjeta: ['', ],
            fechaAnoTarjeta: ['', ],
            cvvTarjeta: ['', ],
        })
    }
   
    get errorControl() {
        return this.ionicForm.controls;
    }
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'botonesCofirmar',
          header: '',
          message: '<strong>¿Estas seguro de pagar con saldo?</strong>',
          buttons: [
            {
              text: 'NO',
              role: 'NO',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'SI',
              handler: () => {
                this.presentAlertPrompt();
              }
            }
          ]
        });
    
        await alert.present();
      }

    async presentAlertPrompt() {
        const alert = await this.alertController.create({
            cssClass: 'nipContent',
            header: '',
            message: '<strong>Introduce tu NIP</strong>',
        inputs: [
            {
            name: 'name6',
            type: 'number',
            placeholder: 'NIP',
            min: 0,
            max: 99999
            },
        ],
        buttons: [
            {
            text: 'Cancelar',
            role: 'cancelar',
            cssClass: 'cancelar',
            handler: () => {
                console.log('Confirm Cancel');
            }
            }, {
            text: 'Aceptar',
            handler: () => {
                console.log('Confirm Aceptar');
            }
            }
        ]
        });
        await alert.present();
    }
    cancelar(){
        if(this.className == 'quitar'){
          this.className = 'mostrar';
        }else{
          this.className = 'quitar';
        }
        return false;
    }
    muestraDireccion2() {
        if (this.ionicForm.value.myBoolean == true) {
            this.mostrarDireccion1 = true;
            this.calle2Required = true;
        } else {
            this.ionicForm.value.calle2 = "";
            this.mostrarDireccion1 = false;
            this.calle2Required = false;
        }
    }
    muestraFactura() {
        if (this.ionicForm.value.myBoolean2 == true) {
            this.mostrarFactura = true;
            this.ionicForm.value.rfc = true;
            this.ionicForm["controls"]["rfc"].reset();
        } else {
            this.ionicForm.get('rfc').setValue("BUFP910825DE3");
            this.mostrarFactura = false;
        }
    }
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
        this.accionBotonPagar(0);
        this.sucursales=[];
        console.log("sucursales aaaa: "+this.sucursales)
        //Radios de forma de envio
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
        this.taskService.getSucursales()
        .subscribe(sucursales => {
            this.sucursales = sucursales;
        });
    }
    generarMp(){
        let tipo_envio:any;
        let sucursal:any;
        let direccion:any;
        if(this.ionicForm.value.direccion.length<4){
            tipo_envio=1;//Sucursal
            sucursal = this.ionicForm.value.direccion;
            direccion=0;
        }else{
            tipo_envio=2;//Direccion
            direccion = this.ionicForm.value.direccion;
            sucursal=0;
        }
        let rutaPlataforma= ((this.platform.is('android'))?"http://localhost":"https://qas.reacsa.mx:3004/mpios");
        let postData = 
        {
            "items": [
                {
                    "title": "SU COMPRA EN REACSA MOVIL",
                    "quantity": 1,
                    "unit_price": parseFloat(this.paymentAmount.replace(',',''))
                }
            ],
            "back_urls": {
                "success": rutaPlataforma+"/pagoexitoso?tipo_envio="+tipo_envio+"&sucursal="+sucursal+"&direccion="+direccion+"&total="+this.paymentAmount+"&uuidCliente="+this.uuidcliente+"&uuidCarrito="+this.uuidCarrito,
                "failure": rutaPlataforma+"/carrito",
                "pending": rutaPlataforma+"/pagopendiente?tipo_envio="+tipo_envio+"&sucursal="+sucursal+"&direccion="+direccion+"&total="+this.paymentAmount+"&uuidCliente="+this.uuidcliente+"&uuidCarrito="+this.uuidCarrito,
                "notification_url":"https://qas.reacsa.mx:3004/notificacion_mp",
            },
            "auto_return": "approved",
            "tipoEnvio":tipo_envio,
            "sucursal":sucursal,
            "direccion":direccion
        };
        console.log("POST DATA MP");
        console.log(postData);
        const headers = new HttpHeaders({
            // "Authorization":"Bearer APP_USR-2911076993776931-012717-8fa842da5ecd106614b29615b7ac9edb-653952398",
            "Authorization":"TEST-2911076993776931-012717-e1076c951bf583a0ca2fddd6044de370-653952398",
            "cache-control": "no-cache",
            "Content-Type":"application/json"
        }); 
        this.http.post("https://api.mercadopago.com/checkout/preferences", postData, { headers: headers })
        .subscribe(data => {
            console.log('==========INFO MP==========');
            console.log(data);
            // $('#scriptMp').html('<script src="https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js" data-preference-id="'+data.id+'"></script>');
            //this.mpData=data;            
            //window.open(data['init_point'], '_blank');
            window.open(data['init_point'], '_self','location=no,transitionstyle=crossdissolve');
        }, error => {
            console.log(error);
        });
    }
    verificarInventarioDomicilio(event){
        this.accionBotonPagar(0);
        this.tax=.16;
        this.iva="16%";
        console.log('==INVENTARIO DOMICILIO==');
        let domicilio=event.detail.value;
        console.log('===DOMICILIO===');
        console.log(event);
        this.direcciones.forEach(d=>{
            console.log(d);
            if(d.uuid_direccion==domicilio){
                console.log('==cp==');
                console.log(d.cp);
                this.taskService.getCoverturaEnvios(d.cp).subscribe(disponible=>{
                    if(disponible.length>0){
                        //$('#btnPagar').show();
                        this.accionBotonPagar(1);
                        this.validacionInventario2(domicilio)
                    }else{
                        this.mensajeInventario="";
                        this.mensajeInventario+="Actualmente no es posible enviar al código postal "+d.cp+" de su dirección";
                        //$('#btnPagar').hide();
                        this.accionBotonPagar(0);
                    }
                });
            }
        });
    }
    accionBotonPagar(accion){
        if(accion==1){//show
            if($('input[name=radio]:checked').val()=="paypal"){
                $('#btnPagar').show();
                $('#btnSaldo').hide();
            }else{
                this.getSaldoCliente()
                $('#btnSaldo').show();
                $('#btnPagar').hide();
            }
        }else{//hide
            $('#btnSaldo').hide();
            $('#btnPagar').hide();
        }
    }
    validacionInventario2(sucursal){
        this.mensajeInventario="";
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                this.nativeStorage.getItem('app')
                .then(
                    app => {
                        let listaPrecio={idlistaprecio:app.lista_precio_id};
                        this.taskService.getCarritoActivoDetalles(carrito.uuid_carrito,listaPrecio).subscribe(dataCarrito=>{
                            dataCarrito.forEach(articulo => {
                                //let data='{"material":"'+articulo.producto_id+'","sucursal":"'+sucursal+'"}';
                                //let data={material:articulo.producto_id,sucursal:sucursal};
                                //let data=JSON.stringify({material:articulo.producto_id,sucursal:sucursal});
                                //$('#btnPagar').show();
                                this.accionBotonPagar(1);
                                let data=JSON.parse('{"material":"'+articulo.producto_id+'"}');
                                this.taskService.getInventarioDomicilio(data).subscribe(inventario=>{
                                    console.log("InventarioDomicilio");
                                    console.log(inventario);
                                    let todosDisponibles=true;
                                    if(parseInt(inventario.total_unidades)<1 || articulo.cantidad>inventario.total_unidades){
                                        this.mensajeInventario+="<div> El articulo "+articulo.nombre+" no tiene la disponibilidad de la cantidad deseada. Favor de disminuir la cantidad deseada o eliminar del carrito.<br> LA DISPONIBILIDAD ES DE "+inventario.total_unidades+"</div><br>";
                                        todosDisponibles=false;
                                        //$('#btnPagar').hide();
                                        this.accionBotonPagar(0);
                                    }
                                    if(!todosDisponibles){
                                        //Deshabilitar el boton
                                    }
                                });
                                
                            });    
                        });
                    },
                    error => console.error("NO HAY UUID_CLIENTE")
                );
            },
            error =>{
                 console.error("NO HAY DATOS DEL CARRITO");
            }
        );
    }
    ionViewWillEnter() {
        this.accionBotonPagar(0);
        this.defaultSelectValue="";
        this.route.queryParams.subscribe(params => {
            this.flag_inventario = params.flag_inventario;
            this.flag_viable_paqueteria = params.flag_viable_paqueteria;
            if(params.status=="failure"){
                alert("Su pago no fue aprobado.");
            }
            console.log("VARIABLE CHECKOUT: "+params.flag_viable_paqueteria)
            if(params.flag_viable_paqueteria==1){
                this.enviodireccion="sucursal";
                this.mostrarTienda=true;
                this.mostrarDireccion=false;
                this.envio = 0.00;
            }else{
                this.enviodireccion="domicilio";
            }
            console.log("Mostrar tienda: "+this.mostrarTienda);
            console.log("Mostrar direccion: "+this.mostrarDireccion)
            this.nativeStorage.getItem('carrito')
            .then(
                carrito => {
                    console.log("==CARRITO DATA==");
                    console.log(carrito);
                    console.log("uuid_cliente: "+carrito.uuid_carrito);
                    this.uuidCarrito=carrito.uuid_carrito;
                    this.taskService.getPrecioEnvio(carrito.uuid_carrito).subscribe(envio=>{
                        this.taskService.patchListaPrecios(carrito.uuid_carrito);
                        console.log('===COSTO ENVIO===');
                        console.log(envio);
                        if(envio[0].peso_total>700){
                            alert("La compra excede los 700 kilogramos máximos para un envío.");
                            this.router.navigate(['/carrito']);
                        }else{
                            if(this.flag_viable_paqueteria==1){
                                console.log("Tipo 1");
                                this.costoEnvio=this.envio=0.00;
                            }else{
                                this.costoEnvio=envio[0].costo_envio.replace('$','').replace(',','');
                                this.envio=envio[0].costo_envio.replace('$','').replace(',','');
                                console.log("Tipo 2");
                                console.log(this.envio);
                            }
                        }
                        let datosDefault={
                            'detail':{
                                'value':'domicilio'
                            }
                        }
                        if(this.flag_viable_paqueteria==1){
                            datosDefault={
                                'detail':{
                                    'value':'sucursal'
                                }
                            }
                        }
                        console.log("datosDefault:");
                        console.log(datosDefault);
                        this.muestraTienda(datosDefault);
                    });
                },
                error =>{
                    alert("No hay datos carrito")
                    console.error("NO HAY DATOS DEL CARRITO");
                }
            );
        });
    }
    muestraTienda(event) {
        //console.log(this.enviodireccion)
        console.log("muestraTienda",event.detail);
        //this.muestraTienda = event.detail;
        console.log("Value: " + event.detail.value)
        if (event.detail.value == "domicilio") {
            this.tax=.16;
            this.iva="16%";
            this.mensajeInventario="";
            this.mostrarDireccion = true;
            this.mostrarTienda = false;
            this.tipoEnvio=1;
            this.envio=this.costoEnvio;
            this.actualizarTotales();
            this.ionicForm = this.formBuilder.group({
                direccion: ['',[Validators.required]]
            })
        }else{
            this.mostrarTienda = true;
            this.mostrarDireccion = false;
            this.tipoEnvio=0;
            this.ionicForm = this.formBuilder.group({
                direccion: ['',[Validators.required]]
            })
            this.envio=0;
            this.actualizarTotales();
        }
    }
    verificarInventarioTienda(event){
        console.log('==INVENTARIO TIENDA==');
        let sucursal=event.detail.value;
        this.sucursales.forEach(s => {
            console.log(s);
            console.log(s.sid_sucursal+"=="+sucursal);
             if(s.sid_sucursal==sucursal){
                console.log("Esta es!..");
                console.log(sucursal);
                this.tax=(s.tasa_iva==1)?.16:.08;
                this.iva=(s.tasa_iva==1)?"16%":"8%";
                this.actualizarTotales();
             }
        });
        this.validacionInventario(sucursal)
    }
    validacionInventario(sucursal){
        this.mensajeInventario="";
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                this.nativeStorage.getItem('app')
                .then(
                    app => {
                        let listaPrecio={idlistaprecio:app.lista_precio_id};
                        this.taskService.getCarritoActivoDetalles(carrito.uuid_carrito,listaPrecio).subscribe(dataCarrito=>{
                            dataCarrito.forEach(articulo => {
                                //let data='{"material":"'+articulo.producto_id+'","sucursal":"'+sucursal+'"}';
                                //let data={material:articulo.producto_id,sucursal:sucursal};
                                //let data=JSON.stringify({material:articulo.producto_id,sucursal:sucursal});
                                //$('#btnPagar').show();
                                this.accionBotonPagar(1);
                                let data=JSON.parse('{"material":"'+articulo.producto_id+'","sucursal":"'+sucursal+'"}');
                                this.taskService.getInventarioSucursal(data).subscribe(inventario=>{
                                    console.log("Inventario");
                                    console.log(inventario);
                                    let todosDisponibles=true;
                                    if(parseInt(inventario.cantidad)<1 || articulo.cantidad>inventario.cantidad){
                                        this.mensajeInventario+="<div> El articulo "+articulo.nombre+" no se encuentra disponible en la sucursal o a superado la cantidad disponible en la sucursal seleccionada, elimine el producto o disminuya la cantidad para poder pagar o elige otra tienda. Cantidad máxima: "+inventario.cantidad+"</div><br>";
                                        todosDisponibles=false;
                                        //$('#btnPagar').hide();
                                        this.accionBotonPagar(0);
                                    }
                                    if(!todosDisponibles){
                                        //Deshabilitar el boton
                                    }
                                });
                                
                            });    
                        });
                    },
                    error => console.error("NO HAY UUID_CLIENTE")
                );
            },
            error =>{
                 console.error("NO HAY DATOS DEL CARRITO");
            }
        );
    }
    actualizarTotales(){
        this.nativeStorage.getItem('totalCompra').then(
            totalCompra => {
                console.log('====Total compra====');
                console.log(totalCompra);
                this.subtotal = totalCompra.toString().replace(',','');
                let envio=this.envio.toString().replace(',','');
                let total = ( parseFloat(this.subtotal) + parseFloat(envio) ) * ( 1 + parseFloat(this.tax) );
                this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
                this.paymentAmountEnvio = this.paymentAmount;
                this.total = this.paymentAmount.replace(',','');
                let subtotal=this.subtotal;
                this.subtotal=subtotal.toLocaleString(undefined,{ minimumFractionDigits: 2 });
            },
            error => {
                this.router.navigate(['/principal']);
            }
        );
    }
    ionViewDidEnter() {
        this.accionBotonPagar(0);
        $("#radioDomicilio").prop("checked", true).trigger("click");
        this.mensajeInventario="";
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
                this.uuidcliente=app.uuid_cliente;
                this.taskService.getDireccionCliente(app.uuid_cliente)
                .subscribe(direcciones => {
                    this.direcciones = direcciones;
                });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
        this.actualizarTotales();
    }
    pagoTarjeta(){
        $('input[name=radio]:checked').val('paypal')
        this.accionBotonPagar(1);
        this.mensajeInventario="";
    }
    getSaldoCliente(){
        this.accionBotonPagar(0);
        console.log('====UUIDCLIENTE====');
        console.log(this.uuidcliente);
        this.taskService.getSaldoCliente(this.uuidcliente)
        .subscribe(credito => {
            console.log('====CREDITO====');
            console.log(credito);
            if(credito[0].has_credit==0){
                this.accionBotonPagar(0);
                this.mensajeInventario="";
                this.mensajeInventario+="Lo sentimos NO cuentas con saldo suficiente.";
            }else{
                this.accionBotonPagar(1);
            }
        });
    }
    // pagoAutorizado(tipo: number, data: any) {
    //     //1 paypal,2 tarjeta
    //     console.log(data);
    //     this.nativeStorage.getItem('carrito')
    //         .then(
    //             carrito => {
    //                 console.log("==CARRITO DATA==");
    //                 console.log(carrito);
    //                 console.log("uuid_carrito: " + carrito.uuid_carrito);
    //                 console.log("TOTAL: " +this.paymentAmount)
    //                 let tipo_envio:any;
    //                 let sucursal:any;
    //                 let direccion:any;
    //                 if(this.ionicForm.value.direccion.length<4){
    //                     tipo_envio=1;//Sucursal
    //                     sucursal = this.ionicForm.value.direccion
    //                 }else{
    //                     tipo_envio=2;//Direccion
    //                     direccion = this.ionicForm.value.direccion
    //                 }
    //                 this.taskService.updCarritoInfo(carrito.uuid_carrito, {
    //                     status: 2,
    //                     id_tipo_pago:tipo,
    //                     total:this.paymentAmount,
    //                     tipo_envio:tipo_envio,
    //                     uuid_direccion:direccion,
    //                     sucursal:sucursal,
    //                     info_pago:data
    //                 }).subscribe(() => {
    //                     this.nativeStorage.getItem('app')
    //                     .then(
    //                         app => {
    //                             console.log("==APP DATA==");
    //                             console.log(app);
    //                             console.log("uuid_cliente: "+app.uuid_cliente);
    //                             this.taskService.setCarritoActivo({uuid_cliente:app.uuid_cliente}).subscribe(() => {
    //                                 this.taskService.getCarritoActivo(app.uuid_cliente).subscribe(carrito_activo_nuevo => {
    //                                     console.log("Nuevo carrito activo.");
    //                                     console.log(carrito_activo_nuevo);
    //                                     this.nativeStorage.setItem('carrito', {
    //                                         uuid_carrito: carrito_activo_nuevo[0].uuid_carrito,
    //                                         cantidad: 0
    //                                     }).then(
    //                                         () => {
    //                                             console.log('Actualizado APPDATA ==>');
    //                                             console.log(carrito);
    //                                             this.taskService.sendMailPagoExitoso(carrito.uuid_carrito).subscribe(()=>{
    //                                                 this.navCtrl.navigateRoot(['/pagoexitoso'])
    //                                             });
    //                                         },
    //                                         error => console.error('Error storing item', error)
    //                                     );
    //                                 });
    //                             });
    //                         },
    //                         error => console.error("NO HAY UUID_CLIENTE")
    //                     );
    //                 });
    //             },
    //             error => {
    //                 this.navCtrl.navigateRoot(['/pagonoexitoso'])
    //             }
    //         );
    // }
    submitForm(tipo) {
        this.isSubmitted = true;
        if(parseFloat(this.paymentAmount.replace(',',''))>0){
            console.log(this.ionicForm.value.direccion);
            if (!this.ionicForm.valid) {
                console.log('Valores cacios!')
                return false;
            } else {
                console.log('Formulario completado' + this.ionicForm.value)
                if (tipo == 1) {
                    console.log("sin envio")
                    //this.payWithPaypal(false); //Sin envio
                    this.generarMp();
                } else if (tipo == 2) {
                    this.presentAlertConfirm();
                // } else if (tipo == 3) {
                //     console.log("con envio")
                //     this.generarMp();
                //     //this.payWithPaypal(true); //Con envio
                // } else if (tipo == 4) {
                //     console.log("numeroTarjeta: "+this.ionicForm.value.numeroTarjeta)
                //     console.log("fechaMesTarjeta: "+this.ionicForm.value.fechaMesTarjeta)
                //     console.log("fechaAnoTarjeta: "+this.ionicForm.value.fechaAnoTarjeta)
                //     console.log("cvvTarjeta: "+this.ionicForm.value.cvvTarjeta)                
                //     if(this.ionicForm.value.numeroTarjeta == "5256780965458952" && this.ionicForm.value.fechaMesTarjeta == "02" && this.ionicForm.value.fechaAnoTarjeta == "21" && this.ionicForm.value.cvvTarjeta=="564"){
                //         this.payWithCard(true);
                //     }else{
                //         this.navCtrl.navigateRoot(['/pagonoexitoso'])
                //     }
                }
            }
        }else{
            this.ionViewWillEnter();
            this.ionViewDidEnter();
        }
    }
    // payWithCard(envio: boolean) {
    //     this.totalCompra=parseFloat(this.paymentAmount);
    //     (envio == true) ? "con envio" : " sin envio";
    //     let id_transaccion = Math.floor(Math.random() * 10000000) + 1000000;;
    //     this.pagoAutorizado(2, id_transaccion)
    // }
    agregarDireccion() {
        this.router.navigate(['/agregardireccion']);
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
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
}