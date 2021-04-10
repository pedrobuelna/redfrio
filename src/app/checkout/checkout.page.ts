import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';
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
    constructor(public platform: Platform,private http: HttpClient,public navCtrl: NavController,private route:ActivatedRoute, private payPal: PayPal, private router: Router, public formBuilder: FormBuilder, private renderer: Renderer2, private nativeStorage: NativeStorage, private taskService: TaskService,) {
        
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
                "notification_url":"https://app.reacsa.mx:3004/notificacion_mp",
            },
            "auto_return": "approved",
            "tipoEnvio":tipo_envio,
            "sucursal":sucursal,
            "direccion":direccion
        };
        const headers = new HttpHeaders({
            "Authorization":"Bearer APP_USR-2911076993776931-012717-8fa842da5ecd106614b29615b7ac9edb-653952398",
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
        console.log('==INVENTARIO DOMICILIO==');
        let domicilio=event.detail.value;
        console.log(event);
        this.validacionInventario2(domicilio)
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
                                $('#btnPagar').show();
                                let data=JSON.parse('{"material":"'+articulo.producto_id+'"}');
                                this.taskService.getInventarioDomicilio(data).subscribe(inventario=>{
                                    console.log("InventarioDomicilio");
                                    console.log(inventario);
                                    let todosDisponibles=true;
                                    if(parseInt(inventario.total_unidades)<1 || articulo.cantidad>inventario.total_unidades){
                                        this.mensajeInventario+="<div> El articulo "+articulo.nombre+" no tiene la disponibilidad de la cantidad deseada. Favor de disminuir la cantidad deseada o eliminar del carrito.<br> LA DISPONIBILIDAD ES DE "+inventario.total_unidades+"</div><br>";
                                        todosDisponibles=false;
                                        $('#btnPagar').hide();
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
                                this.costoEnvio=envio[0].costo_envio.replace('$','');
                                this.envio=envio[0].costo_envio.replace('$','');
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
            this.mensajeInventario="";
            this.mostrarDireccion = true;
            this.mostrarTienda = false;
            this.tipoEnvio=1;
            this.envio=this.costoEnvio;
            // console.log("Subtotal");
            // console.log(this.subtotal);
            // console.log("Envio");
            // console.log(this.envio);
            // console.log("Tax");
            // console.log(this.tax);
            let subtotal=this.subtotal.toString().replace(',','');
            this.subtotal=subtotal;
            let envio=this.envio.toString().replace(',','');
            let total = (parseFloat(this.subtotal) + parseFloat(envio) ) * ( 1 + parseFloat(this.tax) );
            this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
            this.totalMp = this.paymentAmount
            this.paymentAmountEnvio = this.paymentAmount;
            this.total = "$"+this.paymentAmount;
            subtotal=this.subtotal;
            this.subtotal=subtotal.toLocaleString(undefined,{ minimumFractionDigits: 2 });
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
            // console.log("Subtotal");
            // console.log(this.subtotal);
            // console.log("Envio");
            // console.log(this.envio);
            // console.log("Tax");
            // console.log(this.tax);
            let subtotal=this.subtotal.toString().replace(',','');
            this.subtotal=subtotal;
            let envio=this.envio.toString().replace(',','');
            let total = ( parseFloat(this.subtotal) + parseFloat(envio) ) * ( 1 + parseFloat(this.tax) );
            this.totalMp = this.paymentAmount;
            this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
            this.paymentAmountEnvio = this.paymentAmount;
            this.total = "$"+this.paymentAmount;
            subtotal=this.subtotal;
            this.subtotal=subtotal.toLocaleString(undefined,{ minimumFractionDigits: 2 });
        }
    }
    verificarInventarioTienda(event){
        console.log('==INVENTARIO TIENDA==');
        let sucursal=event.detail.value;
        console.log(event);
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
                                $('#btnPagar').show();
                                let data=JSON.parse('{"material":"'+articulo.producto_id+'","sucursal":"'+sucursal+'"}');
                                this.taskService.getInventarioSucursal(data).subscribe(inventario=>{
                                    console.log("Inventario");
                                    console.log(inventario);
                                    let todosDisponibles=true;
                                    if(parseInt(inventario.cantidad)<1 || articulo.cantidad>inventario.cantidad){
                                        this.mensajeInventario+="<div> El articulo "+articulo.nombre+" no se encuentra disponible en la sucursal o a superado la cantidad disponible en la sucursal seleccionada, elimine el producto o disminuya la cantidad para poder pagar o elige otra tienda. Cantidad máxima: "+inventario.cantidad+"</div><br>";
                                        todosDisponibles=false;
                                        $('#btnPagar').hide();
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
    ionViewDidEnter() {
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
        this.nativeStorage.getItem('totalCompra').then(
            totalCompra => {
                this.subtotal = totalCompra;
                //this.totalEnvio = parseFloat(this.subtotal) + parseFloat(this.envio);
                let envio=this.envio.toString().replace(',','');
                let total = ( parseFloat(this.subtotal) + parseFloat(envio) ) * ( 1 + parseFloat(this.tax) );
                this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
                this.paymentAmountEnvio = this.paymentAmount;
                this.total = "$"+this.paymentAmount;
                let subtotal=this.subtotal;
                this.subtotal=subtotal.toLocaleString(undefined,{ minimumFractionDigits: 2 });
                //$(".envio").text(0)
                //this.inicializarVista();
            },
            error => {
                this.router.navigate(['/principal']);
            }
        );
        $("input[name='radio1']") // select the radio by its id
            .change(function () { // bind a function to the change event
                if ($(this).is(":checked")) {
                    var val = $(this).val(); // retrieve the value
                    if ($(this).val() == "cobro") {
                        if ($("input[name=radio][value='credito']").is(":checked")) {
                            //alert("Forma de envio cobro y Form a de pago credito")
                            $(".enviopaypal,.paypalnormal,.sinenvio").addClass("hide")
                            $(".envionormal").removeClass("hide")
                        } else if ($("input[name=radio][value='paypal']").is(":checked")) {
                            //alert("Forma de envio cobro y Form a de pago paypal")
                            $(".paypalnormal,.sinenvio,.envionormal").addClass("hide")
                            $(".enviopaypal").removeClass("hide")
                        }
                    } else {
                        if ($("input[name=radio][value='credito']").is(":checked")) {
                            //alert("Forma de envio sin cobro y Form a de pago credito")
                            $(".enviopaypal,.paypalnormal,.envionormal").addClass("hide")
                            $(".sinenvio").removeClass("hide")
                        } else if ($("input[name=radio][value='paypal']").is(":checked")) {
                            //alert("Forma de envio sin cobro y Form a de pago Paypal")
                            $(".enviopaypal,.sinenvio,.envionormal").addClass("hide")
                            $(".paypalnormal").removeClass("hide")
                        }
                    }
                }
            });
        //Forma de pago
        $("input[name='radio']") // select the radio by its id
            .change(function () { // bind a function to the change event
                if ($(this).is(":checked")) { // check if the radio is checked
                    var val = $(this).val(); // retrieve the value
                    if ($(this).val() == "paypal") {
                        $(".btntarjeta").addClass("hide")
                        $(".btnpaypal").removeClass("hide")
                        $(".datosTarjeta").addClass("hide")
                        $("#nombreTarjeta").val("PAYPAL")
                        $("#numeroTarjeta").val("1234567890123456")
                        $("#fechaDiaTarjeta").val("10")
                        $("#fechaMesTarjeta").val("10")
                        $("#fechaAnoTarjeta").val("20")
                        $("#cvvTarjeta").val("000")
                        if ($("input[name=radio1][value='gratis']").is(":checked")) {
                           //alert("Radio Gratis envio DHL esta en checked y paypal jala 1")
                            $(".enviopaypal").addClass("hide")
                        } else if ($("input[name=radio1][value='cobro']").is(":checked")) {
                            //alert("Radio Cobro envio DHL esta en checked y con paypal jala 1")
                            $(".paypalnormal").addClass("hide")
                        }
                    } else {
                        //alert("JALA 2")
                        $(".btntarjeta").removeClass("hide")
                        $(".btnpaypal").addClass("hide")
                        $(".datosTarjeta").removeClass("hide")
                        $("#nombreTarjeta").val("")
                        $("#numeroTarjeta").val("")
                        $("#fechaDiaTarjeta").val("")
                        $("#fechaMesTarjeta").val("")
                        $("#fechaAnoTarjeta").val("")
                        $("#cvvTarjeta").val("")
                        if ($("input[name=radio1][value='gratis']").is(":checked")) {
                            //alert("Radio Gratis envio DHL esta en checked y paypal")
                            $(".enviopaypal,.envionormal").addClass("hide")
                        } else if ($("input[name=radio1][value='cobro']").is(":checked")) {
                            //alert("Forma de envio cobro y Forma de credito")
                            $(".enviopaypal,.paypalnormal,.sinenvio").addClass("hide")
                            $(".envionormal").removeClass("hide")
                        }
                    }
                }
            });
    }
    payWithPaypal(envio: boolean) {
        console.log("valor" + envio)
        this.payPal.init({
            PayPalEnvironmentProduction: 'ARL8d2sNnhY1ljzD2Z_XVxFzwS3XRHkgDeICVtMuO04MGTO6cO9GUm1kYWVk293i_I3YacE48631i9xQ',
            //PayPalEnvironmentSandbox: 'ARE7r02GjCYmQqYCrEbHfyIIGuPZw7sn_FhDy9lmu5beERPf5Js8uW1Zs3RIB5HXV949tqloCKLW9xmA'
            PayPalEnvironmentSandbox: 'AexiGyImMY7n7R0hYjsM7UEPNGDjPY49GWKNevzJIeu3VPVA9Ua2BO49QYKZqle72vdL5ofbt_Bj4Tsx'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let costoenvio
                if(envio==true){
                    costoenvio = this.costoEnvio
                }else{
                    costoenvio = 0
                }
                console.log("valor" + envio)
                this.paymentAmountEnvio=this.paymentAmount;
                this.paymentAmountEnvio=this.paymentAmountEnvio.replace(',','');
                let payment = new PayPalPayment(this.paymentAmountEnvio, this.currency, 'COMPRA EN REACSA', 'COMPRA');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {
                    setTimeout(() => {
                        this.addMyClass()
                    }, 1500);
                    this.pagoAutorizado(1, res);
                    // Successfully paid
                }, () => {
                    console.log("Error or render dialog closed without being successful")
                    alert("Ocurrio un error al realizar el pago.")
                    // Error or render dialog closed without being successful
                });
            }, () => {
                console.log("Error in configuration")
                // Error in configuration
            });
        }, () => {
            console.log("Error in initialization, maybe PayPal isn't supported or something else")
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }
    payWithCard(envio: boolean) {
        //let total2 = parseFloat(this.tax) + parseFloat(this.subtotal) + ((envio == true) ? this.costoEnvio : 0);
        //this.totalCompra=total2;
        this.totalCompra=parseFloat(this.paymentAmount);
        (envio == true) ? "con envio" : " sin envio";
        let id_transaccion = Math.floor(Math.random() * 10000000) + 1000000;;
        this.pagoAutorizado(2, id_transaccion)
    }
    pagoAutorizado(tipo: number, data: any) {
        //1 paypal,2 tarjeta
        console.log(data);
        this.nativeStorage.getItem('carrito')
            .then(
                carrito => {
                    console.log("==CARRITO DATA==");
                    console.log(carrito);
                    console.log("uuid_carrito: " + carrito.uuid_carrito);
                    console.log("TOTAL: " +this.paymentAmount)
                    let tipo_envio:any;
                    let sucursal:any;
                    let direccion:any;
                    if(this.ionicForm.value.direccion.length<4){
                        tipo_envio=1;//Sucursal
                        sucursal = this.ionicForm.value.direccion
                    }else{
                        tipo_envio=2;//Direccion
                        direccion = this.ionicForm.value.direccion
                    }
                    this.taskService.updCarritoInfo(carrito.uuid_carrito, {
                        status: 2,
                        id_tipo_pago:tipo,
                        total:this.paymentAmount,
                        tipo_envio:tipo_envio,
                        uuid_direccion:direccion,
                        sucursal:sucursal,
                        info_pago:data
                    }).subscribe(() => {
                        this.nativeStorage.getItem('app')
                        .then(
                            app => {
                                console.log("==APP DATA==");
                                console.log(app);
                                console.log("uuid_cliente: "+app.uuid_cliente);
                                this.taskService.setCarritoActivo({uuid_cliente:app.uuid_cliente}).subscribe(() => {
                                    this.taskService.getCarritoActivo(app.uuid_cliente).subscribe(carrito_activo_nuevo => {
                                        console.log("Nuevo carrito activo.");
                                        console.log(carrito_activo_nuevo);
                                        this.nativeStorage.setItem('carrito', {
                                            uuid_carrito: carrito_activo_nuevo[0].uuid_carrito,
                                            cantidad: 0
                                        }).then(
                                            () => {
                                                console.log('Actualizado APPDATA ==>');
                                                console.log(carrito);
                                                this.taskService.sendMailPagoExitoso(carrito.uuid_carrito).subscribe(()=>{
                                                    this.navCtrl.navigateRoot(['/pagoexitoso'])
                                                });
                                            },
                                            error => console.error('Error storing item', error)
                                        );
                                    });
                                });
                            },
                            error => console.error("NO HAY UUID_CLIENTE")
                        );
                    });
                },
                error => {
                    this.navCtrl.navigateRoot(['/pagonoexitoso'])
                }
            );
    }
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
                    console.log("numeroTarjeta: "+this.ionicForm.value.numeroTarjeta)
                    console.log("fechaMesTarjeta: "+this.ionicForm.value.fechaMesTarjeta)
                    console.log("fechaAnoTarjeta: "+this.ionicForm.value.fechaAnoTarjeta)
                    console.log("cvvTarjeta: "+this.ionicForm.value.cvvTarjeta)                
                    if(this.ionicForm.value.numeroTarjeta == "5256780965458952" && this.ionicForm.value.fechaMesTarjeta == "02" && this.ionicForm.value.fechaAnoTarjeta == "21" && this.ionicForm.value.cvvTarjeta=="564"){
                        this.payWithCard(false);
                        
                    }else{
                        this.navCtrl.navigateRoot(['/pagonoexitoso'])
                    }
                } else if (tipo == 3) {
                    console.log("con envio")
                    this.generarMp();
                    //this.payWithPaypal(true); //Con envio
                } else if (tipo == 4) {
                    console.log("numeroTarjeta: "+this.ionicForm.value.numeroTarjeta)
                    console.log("fechaMesTarjeta: "+this.ionicForm.value.fechaMesTarjeta)
                    console.log("fechaAnoTarjeta: "+this.ionicForm.value.fechaAnoTarjeta)
                    console.log("cvvTarjeta: "+this.ionicForm.value.cvvTarjeta)                
                    if(this.ionicForm.value.numeroTarjeta == "5256780965458952" && this.ionicForm.value.fechaMesTarjeta == "02" && this.ionicForm.value.fechaAnoTarjeta == "21" && this.ionicForm.value.cvvTarjeta=="564"){
                        this.payWithCard(true);
                    }else{
                        this.navCtrl.navigateRoot(['/pagonoexitoso'])
                    }
                }
            }
        }else{
            this.ionViewWillEnter();
            this.ionViewDidEnter();
        }
    }
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