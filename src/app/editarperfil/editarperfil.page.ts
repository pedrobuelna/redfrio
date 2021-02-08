import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
import { Task, Sucursal } from '../interfaces/task';
//import { AuthService } from '../auth.service';
import {Md5} from 'ts-md5/dist/md5';


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
  direcciones:any;
  perfiles:any;
  cfdis:any;
  estados:any;
  constructor(
    private  router:  Router,
    public formBuilder: FormBuilder,
    private taskService: TaskService,) {
    // this.ionicForm = new FormGroup({
    //   nombre: new FormControl()
    // });
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.pattern('[A-Z ]*'),Validators.minLength(5),Validators.maxLength(40)]],
      nombre_2: ['', [Validators.maxLength(40)]],
      telefono:['', [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      celular:['',  [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      mail:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      persona_contacto: ['', [Validators.required,Validators.pattern('[A-Z ]*'),Validators.maxLength(40)]],
      sucursal: ['1',],
      tipo_empresa: ['1',],
      rfc: ['BUFP910825DE3',  [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
      uso_cfdi: ['', [Validators.required]],
      password:['', [Validators.required,Validators.minLength(8)]],
      myBoolean: ['false',[]],
      
   })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit() {
    this.taskService.getCfdi()
    .subscribe(cfdis => {
       this.cfdis = cfdis;
       console.log("cfdis: ",cfdis);
    });
    this.taskService.getEstados()
    .subscribe(estados => {
       this.estados = estados;
       console.log("estados: ",estados);
    });
    this.taskService.getDirecciones()
    .subscribe(direcciones => {
       this.direcciones = direcciones;
       console.log("direcciones: ",direcciones);
    });
    this.taskService.getPerfiles()
    .subscribe(perfiles => {
       console.log("JALADO: ",perfiles[0].nombre);
       this.perfiles = perfiles; 
      this.ionicForm = this.formBuilder.group({
        nombre: [perfiles[0].nombre, ],
        nombre_2: [perfiles[0].nombre_2, ],
        telefono:[perfiles[0].telefono,],
        celular:[perfiles[0].celular, ],
        mail:[perfiles[0].mail,],
        persona_contacto: [perfiles[0].persona_contacto,],
        sucursal: [perfiles[0].sucursal,],
        tipo_empresa: [perfiles[0].tipo_empresa,],
        rfc: [perfiles[0].rfc,],
        uso_cfdi: [perfiles[0].uso_cfdi, ],
        password:['', ],
        myBoolean: ['true',[]],
      })
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
      //this.ionicForm["controls"]["rfc"].reset();
      this.ionicForm["controls"]["uso_cfdi"].reset();
    }else{
      //alert("valor3: "+this.ionicForm.value.calle2)
      this.ionicForm.get('rfc').setValue("BUFP910825DE3");
      this.ionicForm.get('uso_cfdi').setValue("---");
      // this.ionicForm.value.rfc="XXXX000000XX3";
      // this.ionicForm.value.uso_cfdi="XXX";
      this.mostrarDireccion1 = false;
      this.calle2Required = false;
    }
  }
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
      // this.taskService.createTask(task)
      //   .subscribe((reply: any) => {
      //       alert("Tus datos han sido guardados correctamente")
      //       this.taskService.sendMailUsr(usrMail)
      //           .subscribe((sendMail: any) => {
      //               console.log("Tus datos han sido guardados correctamente")
      //           }, (err) => {
      //               console.log(err);
      //           });
      //   }, (err) => {
      //       console.log(err)
      //   });
      //   this.router.navigate(['/principal']);
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
    this.router.navigate(['/principal']);
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
