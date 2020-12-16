import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private router: Router,public formBuilder: FormBuilder) { 
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
      this.router.navigate(['/principal']);
    }

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
