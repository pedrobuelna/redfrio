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
    calle2Required: boolean;
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
    constructor(
        private router: Router,
        public formBuilder: FormBuilder,
        private taskService: TaskService,
        public navCtrl: NavController,
        private nativeStorage: NativeStorage) {
        // this.ionicForm = new FormGroup({
        //   nombre: new FormControl()
        // });
        this.ionicForm = this.formBuilder.group({
            nombre: ['', [Validators.required, Validators.pattern('[A-Z ]*'), Validators.minLength(5), Validators.maxLength(40)]],
            nombre_2: ['', [Validators.maxLength(40)]],
            telefono: ['', [Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
            celular: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
            mail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            persona_contacto: ['', [Validators.required, Validators.pattern('[A-Z ]*'), Validators.maxLength(40)]],
            sucursal: ['1', ],
            tipo_empresa: ['1', ],
            rfc: ['', [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
            uso_cfdi: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            myBoolean: ['false', []],

        })
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    ngOnInit() {}
    ionViewDidEnter() {
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
        this.taskService.getDirecciones()
            .subscribe(direcciones => {
                this.direcciones = direcciones;
                console.log("direcciones: ", direcciones);
            });
        this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: " + app.uuid_cliente);
                    this.taskService.getPerfiles(app.uuid_cliente)
                        .subscribe(perfiles => {
                            console.log(perfiles);
                            console.log("JALADO: ", perfiles[0].nombre);
                            this.perfiles = perfiles;
                            this.ionicForm = this.formBuilder.group({
                                id_cliente_sap: [perfiles[0].id_cliente_sap, ],
                                nombre: [perfiles[0].nombre, ],
                                nombre_2: [perfiles[0].nombre_2, ],
                                telefono: [perfiles[0].telefono, ],
                                celular: [perfiles[0].celular, ],
                                mail: [perfiles[0].mail, ],
                                persona_contacto: [perfiles[0].persona_contacto, ],
                                sucursal: [perfiles[0].sucursal, ],
                                tipo_empresa: [perfiles[0].tipo_empresa, ],
                                rfc: [perfiles[0].rfc.toUpperCase, ],
                                uso_cfdi: [perfiles[0].uso_cfdi, ],
                                password: ['', ],
                                myBoolean: ['true', []],
                            })
                        });
                }
            );

    }
    muestraDireccion2() {
        if (this.ionicForm.value.myBoolean == true) {
            this.mostrarDireccion1 = true;
            this.calle2Required = true;
            //alert("valor1: "+this.ionicForm.value.calle2)
            //this.ionicForm["controls"]["rfc"].reset();
            this.ionicForm["controls"]["uso_cfdi"].reset();
        } else {
            //alert("valor3: "+this.ionicForm.value.calle2)
            this.ionicForm.get('rfc').setValue("XAXX010101000");
            this.ionicForm.get('uso_cfdi').setValue("G03");
            // this.ionicForm.value.rfc="XAXX010101000";
            // this.ionicForm.value.uso_cfdi="XXX";
            this.mostrarDireccion1 = false;
            this.calle2Required = false;
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
            this.ionicForm.value.password = Md5.hashStr(this.ionicForm.value.password)
            let usrMail = this.ionicForm.value.mail;
            let perfil = {
                nombre: this.ionicForm.value.nombre,
                nombre_2: this.ionicForm.value.nombre_2,
                telefono: this.ionicForm.value.telefono,
                celular: this.ionicForm.value.celular,
                mail: this.ionicForm.value.mail,
                persona_contacto: this.ionicForm.value.personaContacto,
                sucursal: this.ionicForm.value.sucursal,
                tipo_empresa: this.ionicForm.value.tipoEmpresa,
                rfc: this.ionicForm.value.rfc,
                persona_fisica: this.ionicForm.value.persona_fisica,
                password: this.ionicForm.value.password,
                status: "0",
                uso_cfdi: this.ionicForm.value.uso_cfdi,
                facturacion:true
            };
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: "+app.uuid_cliente);
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
    onclickMenu() {
        this.router.navigate(['/principal']);
    }
    onclickCategorias() {
        this.router.navigate(['/categorias']);
    }
    onclickUsuario() {
        this.router.navigate(['/register']);
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
    logOut(){
        this.nativeStorage.clear()
        .then(
            data =>{
                this.router.navigate(['/login']);
            },
            error => console.error(error)
        );
    }
}