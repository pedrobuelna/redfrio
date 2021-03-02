import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from "@angular/router";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import {
    TaskService
} from '../services/task.service';
import {
    Task,
    Sucursal
} from '../interfaces/task';
//import { AuthService } from '../auth.service';
import {
    Md5
} from 'ts-md5/dist/md5';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-editarperfil',
    templateUrl: './editarperfil.page.html',
    styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
    ionicForm: FormGroup;
    isSubmitted = false;
    myBoolean: boolean;
    mostrarDireccion1: boolean = true;
    tasks: Task[] = [];
    nombre: string;
    nombre_2: string;
    telefono: string;
    celular: string;
    mail: string;
    persona_contacto: string;
    sucursal: string;
    tipo_empresa: string;
    rfc: string;
    persona_fisica: string;
    password: string;
    status: string;
    uso_cfdi: string;
    flag = 0;
    direcciones: any;
    perfiles: any;
    cfdis: any;
    estados: any;
    uuid_notificacion: any;
    listas: any;
    cantidadNot: any = 0;
    notificaciones: any;
    activa: boolean;
    constructor(
        private router: Router,
        public formBuilder: FormBuilder,
        private taskService: TaskService,
        public navCtrl: NavController,
        private nativeStorage: NativeStorage) {
            this.ionicForm = this.formBuilder.group({
                nombre: ['', ],
                nombre_2: ['', ],
                telefono: ['', ],
                celular: ['', ],
                mail: ['', ],
                persona_contacto: ['', ],
                sucursal: ['', ],
                tipo_empresa: ['', ],
                rfc: ['', ],
                uso_cfdi: ['', ],
                password: ['', ],
                myBoolean: ['true', []]
            })
    }
    
    get errorControl() {
        return this.ionicForm.controls;
    }
    ngOnInit() {
        this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: " + app.uuid_cliente);
                    this.taskService.getNotificaciones(app.uuid_cliente)
                        .subscribe(listas => {
                            this.listas = listas;
                            this.cantidadNot = this.listas.length
                        });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
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
    ionViewDidEnter() {
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
        this.taskService.getCfdi()
            .subscribe(cfdis => {
                this.cfdis = cfdis;
                console.log("cfdis: ", cfdis);
            });
        this.taskService.getEstados()
        .subscribe(estados => {
            this.estados = estados;
            console.log("estados: ", estados);
        });
        
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
                    this.taskService.getPerfiles(app.uuid_cliente)
                        .subscribe(perfiles => {
                            console.log(perfiles);
                            console.log("JALADO: ", perfiles[0].nombre);
                            this.perfiles = perfiles;
                            this.ionicForm = this.formBuilder.group({
                                nombre: [perfiles[0].nombre, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5), Validators.maxLength(40)]],
                                nombre_2: [perfiles[0].nombre_2, [Validators.maxLength(40)]],
                                telefono: [perfiles[0].telefono, ],
                                celular: [perfiles[0].celular, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
                                mail: [perfiles[0].mail, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
                                persona_contacto: [perfiles[0].persona_contacto,[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(40)]],
                                sucursal: [perfiles[0].sucursal, ],
                                tipo_empresa: [perfiles[0].tipo_empresa, ],
                                rfc: [perfiles[0].rfc, [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
                                uso_cfdi: [perfiles[0].uso_cfdi, [Validators.required]],
                                password: ["", [Validators.minLength(8)]],
                                myBoolean: ['true', ],
                            })
                            if(perfiles[0].rfc=="XAXX010101000"){   
                                this.ionicForm.get('myBoolean').setValue("false");
                                this.mostrarDireccion1=false;
                            }
                        });
                }
            );
    }
    muestraDireccion2() {
        if (this.ionicForm.value.myBoolean == true) {
            if(this.ionicForm.value.rfc=="XAXX010101000"){
                this.ionicForm.get('rfc').setValue("");
                this.ionicForm.get('uso_cfdi').setValue("");
            }
            this.mostrarDireccion1 = true;
        } else {
            this.ionicForm.get('rfc').setValue("XAXX010101000");
            this.ionicForm.get('uso_cfdi').setValue("G03");
            this.mostrarDireccion1 = false;
        }
    }
    submitForm() {
        this.isSubmitted = true;
        console.log(this.ionicForm.valid)
        console.log(this.ionicForm.value.myBoolean);
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!')
            return false;
        } else {
            //alert('Form Completed' + this.ionicForm.value)
            let usrMail = this.ionicForm.value.mail;
            let perfil = {
                nombre: this.ionicForm.value.nombre.toUpperCase(),
                nombre_2: this.ionicForm.value.nombre_2.toUpperCase(),
                telefono: this.ionicForm.value.telefono,
                celular: this.ionicForm.value.celular,
                mail: this.ionicForm.value.mail,
                persona_contacto: this.ionicForm.value.persona_contacto.toUpperCase(),
                sucursal: this.ionicForm.value.sucursal,
                tipo_empresa: this.ionicForm.value.tipoEmpresa,
                rfc: this.ionicForm.value.rfc,
                persona_fisica: 1,
                status: "1",
                uso_cfdi: this.ionicForm.value.uso_cfdi,
                facturacion:true
            };
            if(this.ionicForm.value.password!=""){
                perfil['password']=Md5.hashStr(this.ionicForm.value.password)
            }
            console.log("<== Patch data :) ==>");
            console.log(perfil);
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: "+app.uuid_cliente);
                    perfil.rfc=perfil.rfc.toUpperCase();
                    this.taskService.updInfoPerfil(app.uuid_cliente,perfil).subscribe(()=>{
                        alert("Tus datos se han actualizado correctamente.");
                        this.router.navigate(['/principal']);
                    });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
        }
    }
    onclickNotificaciones() {
        this.router.navigate(['/notificaciones']);
    }
    onclickUbicaciones() {
        this.router.navigate(['/ubicaciones']);
    }
    verHistorialPedidos(){
        this.router.navigate(['/historialpedidos']);
    }
    onclickMenu() {
        this.router.navigate(['/principal']);
    }
    onclickCategorias() {
        this.router.navigate(['/categorias']);
    }
    onclickProducto() {
        this.router.navigate(['/producto']);
    }
    onClickCarrito() {
        this.router.navigate(['/carrito']);
    }
    agregarDirecciones(){
        this.router.navigate(['/agregardireccion']);
    }
    verDirecciones(){
        this.router.navigate(['/direcciones']);
    }
    logOut(){
        this.nativeStorage.clear()
        .then(
            data =>{
                this.navCtrl.navigateRoot(['/login']);
            },
            error => console.error(error)
        );
    }
}