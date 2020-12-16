import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {
  sucursales:any;
  tiendaSelected = 0;
  constructor(private router: Router,private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      //console.log(tasks);
      this.sucursales = tasks;
    });
  }
  ciudad: string;
  goSucursales(event){
    //console.log(event.detail.value)
    this.ciudad = event.detail.value;
    this.router.navigate(['/sucursales'], { state: { ciudad: this.ciudad} });
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
  clickOnSucursales(){
    this.router.navigate(['/sucursales']);
  }
}
