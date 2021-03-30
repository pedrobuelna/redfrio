import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
import { Task, Sucursal } from '../interfaces/task';
//import { AuthService } from '../auth.service';
import {Md5} from 'ts-md5/dist/md5';
import { ConfirmedValidator } from '../confirmed.validator';
import {
    DbService
} from '../services/db.service';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  myBoolean: boolean;
  mostrarDireccion1: boolean;
  calle2Required: boolean;
  tasks: Task[] = [];
	nombre:string;
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
  flag=0;
  cfdis:any;
  myValue:any;
  className: string = 'quitar';
  currentImage: any;
  photos:any;
  imagenPerfil:any;
  data:any=""
  constructor(
    public photoService: PhotoService,
    private storage: Storage,
    private  router:  Router,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,private nativeStorage: NativeStorage,
    private taskService: TaskService) {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      nombre_2: ['', [Validators.maxLength(40)]],
      telefono:['', [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      celular:['',  [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      mail:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      persona_contacto: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      sucursal: ['1',],
      tipo_empresa: ['1',],
      rfc: ['XAXX010101000',  [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
      uso_cfdi: ['G03', [Validators.required]],
      password:['', [Validators.required,Validators.minLength(8)]],
      confirmarcontrasena: ['', [Validators.required]],
      myBoolean: ['false',[]],
      terminos: [false, [Validators.requiredTrue]],
    }, { 
      validator: ConfirmedValidator('password', 'confirmarcontrasena')
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit() {
    //this.photoService.loadSaved();
    this.nativeStorage.getItem('photos')
    .then(
      data => {
            console.log("URL de la imagen guardada"+data.data);
            this.data = data.data;
        },
        error => {
          this.data = false;
          console.log("No hay FOTO")
        }
    );
    this.getTask()
    this.taskService.getCfdi()
    .subscribe(cfdis => {
       console.log("cfdis: ",cfdis);
       this.cfdis = cfdis;
    });
  }
  getTask() {
    this.taskService.getAllTasks()
    .subscribe(task => {
       console.log("nombre: ",task);
    });
  }
  muestraDireccion2(){
    if(this.ionicForm.value.myBoolean == true){
      this.mostrarDireccion1 = true;
      this.calle2Required = true;
      this.ionicForm["controls"]["rfc"].reset();
      this.ionicForm["controls"]["uso_cfdi"].reset();
    }else{
      this.ionicForm.get('rfc').setValue("XAXX010101000");
      this.ionicForm.get('uso_cfdi').setValue("G03");
      this.mostrarDireccion1 = false;
      this.calle2Required = false;
    }
  }
  nombreCompleto:any;
  
  ionViewWillEnter(){
    this.photoService.photos=[];
    this.photoService.flag=false;
    // this.nativeStorage.setItem('photos', {
    //   data:'',
    // }).then(
    //     () => {
    //         this.data = ''
    //         console.log('Se borra la foto: '+this.data)
    //     },
    //   error => console.error('Error al actualizar la informacion APP', error)
    // );
    // this.nativeStorage.getItem('photos')
    // .then(
    //   data => {
    //         console.log("URL de la imagen guardada 2"+data.data);
    //         this.data = data.data;
    //     },
    //     error => {
    //       this.data = false;
    //       console.log("No hay FOTO")
    //     }
    // );
  }
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    console.log(this.ionicForm.value.myBoolean);
    if (!this.ionicForm.valid){
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.ionicForm.value.password= Md5.hashStr(this.ionicForm.value.password)
      let usrMail = this.ionicForm.value.mail;
      this.nombreCompleto = this.ionicForm.value.nombre +" "+ this.ionicForm.value.nombre_2;
      console.log("RFC: "+this.ionicForm.value.rfc.toUpperCase())
      const task = {
        nombre: this.ionicForm.value.nombre,
        nombre_2: this.ionicForm.value.nombre_2,
        telefono: this.ionicForm.value.telefono,
        celular: this.ionicForm.value.celular,
        mail: this.ionicForm.value.mail,
        persona_contacto: this.ionicForm.value.persona_contacto,
        sucursal: this.ionicForm.value.sucursal,
        tipo_empresa: this.ionicForm.value.tipoEmpresa,
        rfc: this.ionicForm.value.rfc.toUpperCase(),
        persona_fisica: this.ionicForm.value.persona_fisica,
        password: this.ionicForm.value.password,
        status: "0",
        uso_cfdi: this.ionicForm.value.uso_cfdi,
      };
      this.taskService.validarCorreo(usrMail).subscribe((cliente)=>{
        console.log("Found");
        console.log(cliente);
        if(cliente.length>0){
            alert("El correo ya se encuentra registrado.")
        }else{
          this.taskService.createTask(task)
            .subscribe((reply: any) => {
                //alert("Tus datos han sido guardados correctamente")
                //this.taskService.sendMailUsr(usrMail)
                console.log(usrMail)
                console.log(this.nombreCompleto)
                this.taskService.sendMailActivacionUsuario(usrMail)
                    .subscribe((sendMail: any) => {
                      this.nativeStorage.getItem('photos')
                      .then(
                        data => {
                              console.log("URL de la imagen guardada"+data.data);
                              this.data = data.data;
                          },
                          error => {
                            this.data = false;
                            console.log("No hay FOTO")
                          }
                      );
                      this.getTask()
                      this.taskService.getCfdi()
                      .subscribe(cfdis => {
                        console.log("cfdis: ",cfdis);
                        this.cfdis = cfdis;
                      });
                          console.log("FOTO 1"+this.photoService.data);
                          //this.storage.create();
                          //console.log("FOTO 2"+this.storage.get('photos'));
                          this.nativeStorage.setItem('photos', {
                            data: this.photoService.data,
                          }).then(
                              () => {
                                  console.log('Se guarda la foto: '+this.data)
                              },
                            error => console.error('Error al actualizar la informacion APP', error)
                          );
                        console.log("Tus datos han sido guardados correctamente, enviaremos un email para confirmar tu correo y activar tu usuario.");
                        this.navCtrl.navigateRoot(['/registrado'],{
                          queryParams: {
                            nombreCompleto: this.nombreCompleto
                          },
                        });
                    }, (err) => {
                        console.log(err);
                    });
            }, (err) => {
                console.log(err)
            });
        }
      },er=>{});
    
      }
  }
  aceptar(){
    this.myValue=true
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  cancelar(){
    this.myValue=false
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  capturarFoto(){
      this.photoService.takePicture();
      console.log("IMAGEN DE PERFIL");
  }
  onclickNotificaciones(){
    this.router.navigate(['/notificaciones']);
  }
  onclickUbicaciones(){
    this.router.navigate(['/ubicaciones']);
  }
  onclickMenu(){
    this.router.navigate(['/home']);
  }
  onclickCategorias(){
    this.router.navigate(['/categorias']);
  }
  onclickUsuario(){
    this.router.navigate(['/register']);
  }
  onclickProducto(){
    this.router.navigate(['/producto']);
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
