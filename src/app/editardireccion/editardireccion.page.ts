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
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editardireccion',
  templateUrl: './editardireccion.page.html',
  styleUrls: ['./editardireccion.page.scss'],
})
export class EditardireccionPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted: boolean;
  estados: any;
  direcciones: any;
  direccion:any;
  uuid_direccion:any;
  constructor(
      private taskService: TaskService,
      public formBuilder: FormBuilder,
      private nativeStorage: NativeStorage,
      public navCtrl: NavController,
      private route: ActivatedRoute) {
      this.ionicForm = this.formBuilder.group({
          alias: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
          calle: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
          numero: ['', [Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(1)]],
          numerointerior: ['', [Validators.pattern('^[a-zA-Z0-9 -]+$'), Validators.maxLength(10), Validators.minLength(1)]],
          colonia: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
          cp: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
          estado: ['', Validators.required],
          ciudad: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
          telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
          celular: ['', ],
          correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
      })
  }
  get errorControl() {
      return this.ionicForm.controls;
  }
  ngOnInit() {
    let uuid_direccion:any;
    this.taskService.getEstados()
    .subscribe(estados => {
        this.estados = estados;
        console.log("estados: ", estados);
    });
    this.route.queryParams.subscribe(params => {
        console.log("parametro: " + params.uuid_direccion)
        this.uuid_direccion =  params.uuid_direccion
    });
    this.taskService.getDireccionClienteSolo(this.uuid_direccion)
    .subscribe(direccion => {
        console.log("direccion: ", direccion);
        this.ionicForm = this.formBuilder.group({
            alias: [direccion[0].sub_name, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            calle: [direccion[0].calle, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            numero: [direccion[0].numero_exterior, [Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(1)]],
            numerointerior: [direccion[0].numero_interior, [Validators.pattern('^[a-zA-Z0-9 -]+$'), Validators.maxLength(10), Validators.minLength(1)]],
            colonia: [direccion[0].colonia, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
            cp: [direccion[0].cp, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
            estado: [direccion[0].estado, Validators.required],
            ciudad: [direccion[0].poblacion, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            telefono: [direccion[0].telefono,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
            celular: [direccion[0].celular, ],
            correo: [direccion[0].mail, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]]
        })
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
                    fiscal:true
                };
                this.taskService.patchDirecciones(this.uuid_direccion,direccion).subscribe(()=>{
                    this.navCtrl.navigateRoot(['/editarperfil']);
                });
                  
              },
              error => console.error("NO HAY UUID_CLIENTE")
          );
      }
  }
}