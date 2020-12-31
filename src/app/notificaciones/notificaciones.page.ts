import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(".abrir").click(function(){
      alert("Abrir ventana y dar efecto");
    })
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
}
