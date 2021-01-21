import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public items = ["../../assets/images/tarjetas-reacsa@3x2.jpeg",
    "../../assets/images/tarjetas-reacsa@3x.jpeg",
    "../../assets/images/../../assets/images/tarjetas-reacsa@3x2.jpeg",
    "../../assets/images/tarjetas-reacsa@3x.jpeg"
  ];
  @ViewChild("splash") splash: ElementRef;
  public sliderOptions = {
    initialSlide: 0, 
    speed: 350, 
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  public items2 = ["../../assets/images/producto1@3x.png",
    "../../assets/images/producto1@3x.png"
  ];
  public sliderOptions2 = {
    initialSlide: 0, 
    speed: 350,  
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  productos2: any;
  notificaciones:any;
  cantidadNot:any;
  constructor(private router: Router,private renderer: Renderer2,
    private taskService: TaskService) { }
  addMyClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.addClass(this.splash.nativeElement, "quitSplash");
  }
  ngOnInit() {
    setTimeout(() => {
      this.addMyClass()
     }, 1500);
     this.taskService.getAllProductos()
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
      this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length
      });
  }
  ionViewWillEnter(){
    this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length
      });
  }
  retraso(){
    console.log("Retraso")
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
  onClickProducto(id){
    this.router.navigate(['/producto'], {
        queryParams: {
            id: id
        }
    });
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
