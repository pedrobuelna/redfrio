import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  public items = ["../../assets/images/aireblanco.png",
    "../../assets/images/aireblanco.png",
    "../../assets/images/aireblanco.png",
    "../../assets/images/aireblanco.png"
  ];
  
  public sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    pagination: {
      clickable: true,
    }
  };
  @ViewChild('slides') slides;
  constructor(private router: Router) { }
  move1(slides){
    console.log(slides)
    slides.slideTo(0)
  }
  move2(slides){
    console.log(slides)
    slides.slideTo(1)
  }
  move3(slides){
    console.log(slides)
    slides.slideTo(2)
  }
  move4(slides){
    console.log(slides)
    slides.slideTo(3)
  }
  ngOnInit() {
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
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
