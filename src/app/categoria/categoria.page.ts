import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskService} from '../services/task.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  constructor(private router: Router,private taskService: TaskService) { }
  productos2: any;
  ngOnInit() {
    this.taskService.getProductos()
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
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
  onclickProducto(id){
      this.router.navigate(['/producto'], {
        queryParams: {
            id: id
        }
    });
    //this.router.navigate(['/producto']);
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
