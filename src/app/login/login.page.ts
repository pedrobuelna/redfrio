import {
    Component,
    OnInit
} from '@angular/core';
import {Router} from '@angular/router';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl} from "@angular/forms";
import {TaskService} from '../services/task.service';
import {Task} from '../interfaces/task';
import {ActivatedRoute} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {DbService} from '../services/db.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController,NavController } from '@ionic/angular';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    ionicForm: FormGroup;
    isSubmitted = false;
    tasks: Task[] = [];
    mail: any;
    password: any;
    className: string = 'quitar';
    constructor(
        private router: Router, 
        public navCtrl: NavController,
        public formBuilder: FormBuilder, 
        private taskService: TaskService,
        public alertController: AlertController,
        private activatedRoute: ActivatedRoute,
        private db: DbService,
        private nativeStorage: NativeStorage
    ) {
        this.ionicForm = this.formBuilder.group({
            correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(6)]]

        })
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!')
            return false;
        } else {
            console.log('Form Completed' + this.ionicForm.value)
            this.getLogin();
        }
    }
    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'class_alert',
            //header: 'Alert',
            //subHeader: 'Subtitle',
            message: 'Usuario y/o contraseña incorrecta',
            buttons: ['OK']
        });
        await alert.present();
    }
    getLogin() {
        this.taskService.getLogin(this.ionicForm.value.correo, Md5.hashStr(this.ionicForm.value.password))
            .subscribe((data) => {
                if (data[0] != null) {
                    let cliente=data[0];
                    this.nativeStorage.setItem('app', {
                        nombre:cliente.nombre,
                        correo:cliente.mail,
                        uuid_cliente:cliente.uuid_cliente 
                    }).then(
                        () => {
                            console.log('Se actualizo la informacion APP')
                            this.getCarritoInfo(cliente.uuid_cliente)
                            //this.router.navigate(['/principal']);
                        },
                        error => console.error('Error al actualizar la informacion APP', error)
                    );
                } else {
                    console.log("No Existe: " + Md5.hashStr(this.ionicForm.value.password));
                    this.presentAlert();
                }
            }, (err) => {
                alert(err)
            });
       
    }
    getCarritoInfo(uuid_cliente:string){
        
        this.taskService.getCarritoActivo(uuid_cliente).subscribe(carrito_activo => {
            if(carrito_activo.length >0){
                console.log("==Carrito activo==");
                console.log(carrito_activo[0]);
                this.setCarritoData(carrito_activo[0]);
            }else{
                console.log("No existe un carrito activo.");
                console.log("Insertando un carrito para el usuario:" + uuid_cliente);
                this.taskService.setCarritoActivo({uuid_cliente}).subscribe(() => {
                    this.taskService.getCarritoActivo(uuid_cliente).subscribe(carrito_activo_nuevo => {
                        console.log("Nuevo carrito activo.");
                        console.log(carrito_activo_nuevo);
                        this.setCarritoData(carrito_activo_nuevo[0]);
                    });
                });
            }
        });
    }
    setCarritoData(carrito:any){
        this.nativeStorage.setItem('carrito', {uuid_carrito:carrito.uuid_carrito,cantidad: carrito.cantidad }).then(
            () => {
                console.log('Actualizado APPDATA');
                console.log(carrito);
                this.router.navigate(['/principal']);
            },
            error => console.error('Error storing item', error)
        );
    }
    ngOnInit() {}
    validarLogin() {
        // this.authService.register(form.value).subscribe((res) => {
        //   this.router.navigateByUrl('home');
        // });
        this.router.navigate(['/principal']);
    }
    onClickRegister() {
        this.router.navigate(['/register']);
    }
    cancelar(){
    if(this.className == 'quitar'){
        this.className = 'mostrar';
    }else{
        this.className = 'quitar';
    }
    return false;
    }
}
