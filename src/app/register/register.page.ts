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
  constructor(
    private  router:  Router,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    private taskService: TaskService,) {
    // this.ionicForm = new FormGroup({
    //   nombre: new FormControl()
    // });
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
    }, { 
      validator: ConfirmedValidator('password', 'confirmarcontrasena')
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit() {
    this.getTask()
    // if(this.ionicForm.value.myBoolean == true){
    //   this.mostrarDireccion1 = true;
    // }else{
    //   this.mostrarDireccion1 = false;
    // }
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
  // register(form) {
  //   this.authService.register(form.value).subscribe((res) => {
  //     this.router.navigateByUrl('home');
  //   });
  //}
  muestraDireccion2(){
    if(this.ionicForm.value.myBoolean == true){
      this.mostrarDireccion1 = true;
      this.calle2Required = true;
      //alert("valor1: "+this.ionicForm.value.calle2)
      this.ionicForm["controls"]["rfc"].reset();
      this.ionicForm["controls"]["uso_cfdi"].reset();
    }else{
      //alert("valor3: "+this.ionicForm.value.calle2)
      this.ionicForm.get('rfc').setValue("XAXX010101000");
      this.ionicForm.get('uso_cfdi').setValue("G03");
      // this.ionicForm.value.rfc="XXXX000000XX3";
      // this.ionicForm.value.uso_cfdi="XXX";
      this.mostrarDireccion1 = false;
      this.calle2Required = false;
    }
  }
  emailcorreo:any;
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    console.log(this.ionicForm.value.myBoolean);
    if (!this.ionicForm.valid){
      console.log('Please provide all the required values!')
      return false;
    } else {
      //alert('Form Completed' + this.ionicForm.value)
      this.ionicForm.value.password= Md5.hashStr(this.ionicForm.value.password)
      let usrMail = this.ionicForm.value.mail;
      this.emailcorreo = this.ionicForm.value.mail;
      const task = {
        nombre: this.ionicForm.value.nombre,
        nombre_2: this.ionicForm.value.nombre2,
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
                    console.log(this.emailcorreo)
                    this.taskService.sendMailActivacionUsuario(usrMail)
                        .subscribe((sendMail: any) => {
                            console.log("Tus datos han sido guardados correctamente, enviaremos un email para confirmar tu correo y activar tu usuario.")
                        }, (err) => {
                            console.log(err);
                        });
                }, (err) => {
                    console.log(err)
                });
                this.navCtrl.navigateRoot(['/login']);
        }
      },er=>{});

    



      // this.taskService.createTask(task)
			// 	.subscribe((newTask) => {
      //      // do happy stuff
      //      alert("Tus datos han sido guardados correctamente")
      //     }, (err) => {
      //       // do alerty stuff
      //       alert(err)
      //     });
      
       }
    
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
