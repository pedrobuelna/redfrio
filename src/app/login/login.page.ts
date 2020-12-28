import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  tasks: Task[] = [];
  mail:any;
  password:any;
  constructor(private router: Router,public formBuilder: FormBuilder,private taskService: TaskService,private activatedRoute: ActivatedRoute) { 
    this.ionicForm = this.formBuilder.group({
      correo:  ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(6)]]
      
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
  getLogin() {
		
    
    this.taskService.getLogin(this.ionicForm.value.correo,this.ionicForm.value.password)
    .subscribe((data) => {
      // do happy stuff
      //task.mail = this.ionicForm.value.mail
      //task.contrasena = this.ionicForm.value.password
      alert(`Haz sido logueado` + data.password)
     }, (err) => {
       // do alerty stuff
       alert(err)
     });
	}
  ngOnInit() {
  }
  validarLogin() {
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
    this.router.navigate(['/principal']);
  }
  onClickRegister() {
    this.router.navigate(['/register']);
  }
}
