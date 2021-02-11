import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-agregardireccion',
  templateUrl: './agregardireccion.page.html',
  styleUrls: ['./agregardireccion.page.scss'],
})
export class AgregardireccionPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted:boolean;
  estados:any;
  direcciones:any;
  constructor(private taskService: TaskService,public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      alias: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      calle: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      numero:['', [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(1)]],
      numerointerior:['',  [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(1)]],
      colonia: ['', [Validators.required],Validators.minLength(5),Validators.maxLength(40)],
      cp: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      estado: ['',Validators.required],
      ciudad: ['',Validators.required,Validators.minLength(5),Validators.maxLength(40)],
      telefono: ['',  [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit(){
    this.taskService.getEstados()
    .subscribe(estados => {
      this.estados = estados;
      console.log("estados: ", estados);
    });
  }
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    if (!this.ionicForm.valid){
      console.log('Falta capturar campos !')
      return false;
    } else {
      console.log('Valores Guardados')
    }
  }
}
