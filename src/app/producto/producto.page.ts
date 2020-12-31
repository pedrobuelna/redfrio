import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskService} from '../services/task.service';

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
  
  producto2: any;
  constructor(private router: Router,private taskService: TaskService,
    private route: ActivatedRoute) { }
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
    let x="";
    this.route.queryParams.subscribe( queryParams => x = queryParams.id);
//    console.log("x:" + x)
    this.taskService.getProducto(x)
      .subscribe(producto2 => {
          this.producto2 = producto2;
          console.log(producto2)
    });
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
