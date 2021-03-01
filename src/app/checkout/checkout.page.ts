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
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
    klo:any;
    costoEnvio: number;
    ionicForm: FormGroup;
    isSubmitted = false;
    myBoolean: boolean;
    myBoolean2: boolean;
    mostrarDireccion1: boolean;
    mostrarFactura: boolean;
    calle2Required: boolean;
    paymentAmount: string = '3.33';
    paymentAmountEnvio: string;
    currency: string = 'USD';
    currencyIcon: string = '$';
    tax: any = .16;
    envio: any = 20;
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
    @ViewChild("splash") splash: ElementRef;
    constructor(public navCtrl: NavController,private route: ActivatedRoute, private payPal: PayPal, private router: Router, public formBuilder: FormBuilder, private renderer: Renderer2, private nativeStorage: NativeStorage, private taskService: TaskService, ) {
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
    // envioGratis(){
    //     $(".envio").text(0)
    //     if(this.total != 0){
            
    //         console.log("===SIN ENVIO===");
    //         console.log(this.subtotal);
    //         let total = (this.subtotal*parseFloat(1+this.tax));
    //         this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
    //         $(".total").text(this.paymentAmount)
    //     }else{
    //         $(".total").text(0)
    //     }
    // }
    // envioCobrado(){
    //     $(".envio").text(this.envio)
    //     if(this.total != 0){
    //         console.log("===SIN ENVIO===");
    //         console.log(this.subtotal);
    //         let total = ((this.subtotal+parseFloat(this.envio))*parseFloat(1+this.tax));
    //         this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
    //         $(".total").text(this.paymentAmount)
    //     }else{
    //         $(".total").text(0)
    //     }
    // }
    ionViewWillEnter() {
        this.nativeStorage.getItem('carrito')
        .then(
            carrito => {
                console.log("==CARRITO DATA==");
                console.log(carrito);
                console.log("uuid_cliente: "+carrito.uuid_carrito);
                this.taskService.getPrecioEnvio(carrito.uuid_carrito).subscribe(envio=>{
                    console.log('===COSTO ENVIO===');
                    console.log(envio);
                    if(envio[0].peso_total>700){
                        alert("La compra exede los 700 kilogramos maximos para un envio.");
                        this.router.navigate(['/carrito']);
                    }else{
                        this.envio=envio[0].costo_envio.replace('$','');
                    }
                });
            },
            error =>{
                 console.error("NO HAY DATOS DEL CARRITO");
            }
        );
    }
    ionViewDidEnter() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
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
                let envio=this.envio.replace(',','');
                let total = (parseFloat(this.subtotal)*(1+parseFloat(this.tax)))+parseFloat(envio);
                this.paymentAmount = total.toLocaleString(undefined,{ minimumFractionDigits: 2 });
                this.paymentAmountEnvio = this.paymentAmount;
                this.total = this.paymentAmount;
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
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            //PayPalEnvironmentSandbox: 'ARE7r02GjCYmQqYCrEbHfyIIGuPZw7sn_FhDy9lmu5beERPf5Js8uW1Zs3RIB5HXV949tqloCKLW9xmA'
            PayPalEnvironmentSandbox: 'AexiGyImMY7n7R0hYjsM7UEPNGDjPY49GWKNevzJIeu3VPVA9Ua2BO49QYKZqle72vdL5ofbt_Bj4Tsx'
            
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
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
                //let total2 =  (parseFloat(this.subtotal)) + (parseFloat(this.subtotal) * parseFloat(this.tax)) + costoenvio;
                //this.paymentAmountEnvio = total2.toString();
                this.paymentAmountEnvio=this.paymentAmount;
                this.paymentAmountEnvio=this.paymentAmountEnvio.replace(',','');
                //alert("TOTAL PAYPAY: "+this.paymentAmountEnvio);
                let payment = new PayPalPayment(this.paymentAmountEnvio, this.currency, 'Compra en reacsa', 'sale');
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
                    this.taskService.updCarritoInfo(carrito.uuid_carrito, {
                        status: 2,
                        id_tipo_pago:tipo,
                        total:this.totalCompra,
                        uuid_direccion:this.ionicForm.value.direccion,
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
        console.log(this.ionicForm.value.direccion);
        //alert("top" + tipo)
        if (!this.ionicForm.valid) {
            console.log('Valores cacios!')
            return false;
        } else {
            console.log('Formulario completado' + this.ionicForm.value)
            if (tipo == 1) {
                console.log("sin envio")
                this.payWithPaypal(false); //Sin envio
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
                this.payWithPaypal(true); //Con envio
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