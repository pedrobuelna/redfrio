import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  constructor(private router: Router,private taskService: TaskService) { }
  familias:any;
  ngOnInit() {
    this.taskService.getFamilias()
      .subscribe(familias => {
          this.familias = familias;
          console.log(familias)
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
  onclickAllCategoria(){
    this.router.navigate(['/categoria']);
  }
  onclickUsuario(){
    this.router.navigate(['/register']);
  }
  onclickCategoria(id){
    this.router.navigate(['/categoria'], {
      queryParams: {
          id: id
      }
    });
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
}
