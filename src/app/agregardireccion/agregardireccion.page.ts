import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import {
    TaskService
} from '../services/task.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-agregardireccion',
    templateUrl: './agregardireccion.page.html',
    styleUrls: ['./agregardireccion.page.scss'],
})
export class AgregardireccionPage implements OnInit {
    ionicForm: FormGroup;
    isSubmitted: boolean;
    estados: any;
    direcciones: any;
    constructor(
        private taskService: TaskService,
        public formBuilder: FormBuilder,
        private nativeStorage: NativeStorage,
        public navCtrl: NavController) {
        this.ionicForm = this.formBuilder.group({
            alias: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
            calle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            numero: ['', [Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(1)]],
            numerointerior: ['', [Validators.pattern('^[a-zA-Z0-9 -]+$'), Validators.maxLength(10), Validators.minLength(1)]],
            colonia: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            cp: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
            estado: ['', Validators.required],
            ciudad: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            telefono: ['', ],
            celular: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
            correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
        })
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    ngOnInit() {
        this.taskService.getEstados()
            .subscribe(estados => {
                this.estados = estados;
                console.log("estados: ", estados);
            });
    }
    submitForm() {
        this.isSubmitted = true;
        console.log(this.ionicForm)
        if (!this.ionicForm.valid) {
            console.log('Falta capturar campos !')
            return false;
        } else {
             this.nativeStorage.getItem('app')
            .then(
                app => {
                    console.log("==APP DATA==");
                    console.log(app);
                    console.log("uuid_cliente: "+app.uuid_cliente);
                    this.taskService.getDireccionCliente(app.uuid_cliente).subscribe((d)=>{
                        let direccion = {
                            sub_name: this.ionicForm.value.alias,
                            calle: this.ionicForm.value.calle,
                            numero_exterior: this.ionicForm.value.numero,
                            numero_interior: this.ionicForm.value.numerointerior,
                            colonia: this.ionicForm.value.colonia,
                            cp: this.ionicForm.value.cp,
                            estado: this.ionicForm.value.estado,
                            poblacion: this.ionicForm.value.ciudad,
                            telefono: this.ionicForm.value.telefono,
                            celular: this.ionicForm.value.celular,
                            mail: this.ionicForm.value.correo,
                            uuid_cliente: app.uuid_cliente,
                            fiscal:false
                        };
                        if(d.length==0){
                            direccion.fiscal=true;
                        }
                        this.taskService.postDirecciones(direccion).subscribe(()=>{
                              this.navCtrl.back({
                                animated: true,
                                animationDirection: "back"
                              })
                        });
                    });
                },
                error => console.error("NO HAY UUID_CLIENTE")
            );
        }
    }
}