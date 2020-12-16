import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  myBoolean: boolean;
  myBoolean2: boolean;
  mostrarDireccion1: boolean;
  mostrarFactura: boolean;
  calle2Required: boolean;
  @ViewChild("splash") splash: ElementRef;
  constructor(private  router:  Router,public formBuilder: FormBuilder,private renderer: Renderer2) {
    // this.ionicForm = new FormGroup({
    //   nombre: new FormControl()
    // });
    this.mostrarDireccion1=true;
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      calle: ['', [Validators.required]],
      numeroExterior: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]],
      estado: ['', [Validators.required]],
      poblacion: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      celular2: ['', []],
      myBoolean: ['true',[]],
      myBoolean2: ['false',[]],
      colonia: ['', [Validators.required, Validators.minLength(2)]],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(5),Validators.maxLength(5)]],
      telefono: ['',],
      //VALIDACION RFC: ^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$
      rfc: ['BUFP910825DE3', [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
      nombreTarjeta: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
      personaContacto: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
      numeroTarjeta: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(16),Validators.maxLength(16)]],
      fechaDiaTarjeta: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(16),Validators.maxLength(16)]],
      fechaMesTarjeta: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(2),Validators.maxLength(2)]],
      fechaAnoTarjeta: ['', [Validators.required]],
      cvvTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(3),Validators.maxLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
   })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  muestraDireccion2(){
    if(this.ionicForm.value.myBoolean == true){
      this.mostrarDireccion1 = true;
      this.calle2Required = true;
      //alert("valor1: "+this.ionicForm.value.calle2)
      //this.ionicForm["controls"]["calle2"].reset();
      //alert("valor2: "+this.ionicForm.value.calle2)
    }else{
      //alert("valor3: "+this.ionicForm.value.calle2)
      this.ionicForm.value.calle2="";
      this.mostrarDireccion1 = false;
      this.calle2Required = false;
    }
  }
  muestraFactura(){
    if(this.ionicForm.value.myBoolean2 == true){
      this.mostrarFactura = true;
      this.ionicForm.value.rfc=true;
      this.ionicForm["controls"]["rfc"].reset();
    }else{
      this.ionicForm.get('rfc').setValue("BUFP910825DE3");
      this.mostrarFactura = false;
      // this.ionicForm.value.rfc='x';
    }
    //alert(this.ionicForm.value.rfc)
  }
  addMyClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.addClass(this.splash.nativeElement, "quitSplash");
  }
  ngOnInit() {
    
  }
  submitForm() {
    this.isSubmitted = true;
    //alert("ENVIAR valor RFC: "+this.ionicForm.value.rfc)
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log('Form Completed' + this.ionicForm.value)
      setTimeout(() => {
        this.addMyClass()
       }, 1500);
       setTimeout(() => {
        this.router.navigate(['/principal']);
       }, 200000);
      
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
    this.router.navigate(['/usuario']);
  }
  onclickProducto(){
    this.router.navigate(['/producto']);
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
