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

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
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
    currencyIcon: string = '₹';
    tax: any = 10;
    envio: any = 0;
    subtotal: any;
    total: any;
    totalEnvio: any;
    sucursales: any;
    direcciones:any;
    @ViewChild("splash") splash: ElementRef;
    constructor(private route: ActivatedRoute, private payPal: PayPal, private router: Router, public formBuilder: FormBuilder, private renderer: Renderer2, private nativeStorage: NativeStorage, private taskService: TaskService, ) {
        // this.ionicForm = new FormGroup({
        //   nombre: new FormControl()
        // });
        this.costoEnvio = 20;
        this.mostrarDireccion1 = true;
        this.ionicForm = this.formBuilder.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            apellido: ['', [Validators.required, Validators.minLength(2)]],
            calle: ['', [Validators.required]],
            numeroExterior: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]],
            estado: ['', [Validators.required]],
            poblacion: ['', [Validators.required]],
            celular: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
            celular2: ['', []],
            myBoolean: ['true', []],
            myBoolean2: ['false', []],
            colonia: ['', [Validators.required, Validators.minLength(2)]],
            cp: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(5), Validators.maxLength(5)]],
            telefono: ['', ],
            //VALIDACION RFC: ^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$
            rfc: ['BUFP910825DE3', [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
            nombreTarjeta: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
            personaContacto: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
            numeroTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(16), Validators.maxLength(16)]],
            fechaDiaTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(2), Validators.maxLength(2)]],
            fechaMesTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(2), Validators.maxLength(2)]],
            fechaAnoTarjeta: ['', [Validators.required]],
            cvvTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3), Validators.maxLength(3)]],
            correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        })
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    muestraDireccion2() {
        if (this.ionicForm.value.myBoolean == true) {
            this.mostrarDireccion1 = true;
            this.calle2Required = true;
            //alert("valor1: "+this.ionicForm.value.calle2)
            //this.ionicForm["controls"]["calle2"].reset();
            //alert("valor2: "+this.ionicForm.value.calle2)
        } else {
            //alert("valor3: "+this.ionicForm.value.calle2)
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
            // this.ionicForm.value.rfc='x';
        }
        //alert(this.ionicForm.value.rfc)
    }
    addMyClass() {
        //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
        this.renderer.addClass(this.splash.nativeElement, "quitSplash");
    }
    ngOnInit() {
        //this.route.queryParams.subscribe( queryParams => this.subtotal = queryParams.subtotal)
        //this.total = parseFloat(this.tax) + parseFloat(this.subtotal) + parseFloat(this.envio) 
        //this.paymentAmount = this.total.toString()
        //Radios de forma de envio

        this.taskService.getSucursales()
            .subscribe(sucursales => {
                this.sucursales = sucursales;
            });
    }
    ionViewDidEnter() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("==APP DATA==");
                console.log(app);
                console.log("uuid_cliente: "+app.uuid_cliente);
                this.taskService.getDireccionCliente(app.uuid_cliente)
                .subscribe(sucursales => {
                    this.sucursales = sucursales;
                });
            },
            error => console.error("NO HAY UUID_CLIENTE")
        );
        this.nativeStorage.getItem('totalCompra').then(
            totalCompra => {
                this.subtotal = totalCompra;
                var total1 = parseFloat(this.tax) + parseFloat(this.subtotal)
                this.total = parseFloat(this.tax) + parseFloat(this.subtotal)
                this.totalEnvio = parseFloat(this.tax) + parseFloat(this.subtotal) + parseFloat(this.envio)
                this.paymentAmount = this.total.toString()
                this.paymentAmountEnvio = this.totalEnvio.toString()
                var tax = parseFloat(this.tax)
                $("input[name='radio1']") // select the radio by its id
                    .change(function () { // bind a function to the change event
                        if ($(this).is(":checked")) {
                            if ($(this).val() == "gratis") {
                                $(".envio").text(0)
                                $(".total").text(total1)
                            } else {
                                $(".envio").text(20)
                                $(".total").text(total1 + 20)
                                var tot = total1 + 20
                                this.paymentAmount = tot.toString()
                                //alert(this.paymentAmount)
                            }
                        }
                    });
                this.inicializarVista();
            },
            error => {
                this.router.navigate(['/principal']);
            }
        );
    }
    inicializarVista() {
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
                        $("#numeroTarjeta").val("0000000000000000")
                        $("#fechaDiaTarjeta").val("01")
                        $("#fechaMesTarjeta").val("01")
                        $("#fechaAnoTarjeta").val("20")
                        $("#cvvTarjeta").val("000")
                        if ($("input[name=radio1][value='gratis']").is(":checked")) {
                            //alert("Radio Gratis envio DHL esta en checked y paypal")
                            $(".enviopaypal").addClass("hide")
                        } else if ($("input[name=radio1][value='cobro']").is(":checked")) {
                            //alert("Radio Cobro envio DHL esta en checked y con paypal")
                            $(".paypalnormal").addClass("hide")
                        }
                    } else {
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
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AX2IlIks14mOg_Yke97jPoGtXGawMNUhbo0-XYSJV21G2Rv97tti6CnKxq3mhME_IjdKiFrFSNPlEAVM'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let total2 = parseFloat(this.tax) + parseFloat(this.subtotal) + ((envio == true) ? this.costoEnvio : 0);
                this.paymentAmountEnvio = total2.toString();
                //alert("paypal"+this.paymentAmountEnvio)
                let payment = new PayPalPayment(this.paymentAmountEnvio, this.currency, 'Descripcion', 'Venta en REACSA');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {

                    setTimeout(() => {
                        this.addMyClass()
                    }, 1500);
                    this.pagoAutorizado(1, res);
                    // Successfully paid
                }, () => {
                    console.log("Error or render dialog closed without being successful")
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
        alert("Gracias por su pago " + ((envio == true) ? "con envio" : " sin envio"));
        this.pagoAutorizado(2, "Debito")
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
                        status: 2
                    }).subscribe(() => {
                        this.nativeStorage.setItem('carrito', {
                            uuid_carrito: carrito.uuid_carrito,
                            cantidad: 0
                        }).then(
                            () => {
                                console.log('Actualizado APPDATA ==>');
                                console.log(carrito);
                                this.router.navigate(['/principal']);
                            },
                            error => console.error('Error storing item', error)
                        );
                    });
                },
                error => {
                    this.router.navigate(['/principal']);
                }
            );
    }
    submitForm(tipo) {
        this.isSubmitted = true;
        //alert("ENVIAR valor RFC: "+this.ionicForm.value.rfc)
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!')
            return false;
        } else {
            console.log('Form Completed' + this.ionicForm.value)
            if (tipo == 1) {
                this.payWithPaypal(false); //Sin envio
            } else if (tipo == 2) {
                alert("Credito")
            } else if (tipo == 3) {
                this.payWithPaypal(true); //Con envio
            } else if (tipo == 4) {
                alert("Credito envio")
            }
        }
    }
    agregarDireccion() {
        this.router.navigate(['/editarperfil']);
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
        this.router.navigate(['/usuario']);
    }
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
}