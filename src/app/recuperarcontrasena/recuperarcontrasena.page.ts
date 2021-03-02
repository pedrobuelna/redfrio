import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Md5} from 'ts-md5/dist/md5';
import { ConfirmedValidator } from '../confirmed.validator';
import { TaskService } from '../services/task.service';
import { Router } from  "@angular/router";
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private  router:  Router,public formBuilder: FormBuilder,
    private taskService: TaskService,private network: Network) { 
    this.ionicForm = this.formBuilder.group({
      mail:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['', [Validators.required,Validators.minLength(8)]],
      confirmarcontrasena: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirmarcontrasena')
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit() {
  }
  submitForm() {
    this.isSubmitted = true;
    console.log("Valor del formukario: " + this.ionicForm.valid)
    if (!this.ionicForm.valid){
      alert('Captura todos los valores!');
      return false;
    } else {
      this.ionicForm.value.password = Md5.hashStr(this.ionicForm.value.password)
      let usrMail = this.ionicForm.value.mail;
      let perfil = {
        password: this.ionicForm.value.password
      };
      this.taskService.updateContrasena(usrMail,perfil).subscribe(()=>{
        alert("Tus datos se han actualizado correctamente.");
        this.router.navigate(['/login']);
      });
    }
  }
}
