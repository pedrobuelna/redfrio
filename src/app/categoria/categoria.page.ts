import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskService} from '../services/task.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  constructor(private router: Router,private taskService: TaskService,
              private route: ActivatedRoute) { }
  productos2: any;
  familias: any;
  
  checkValue(event){
    console.log(event.detail.value)
     let id = parseFloat(event.detail.value);
      this.taskService.getProductos(id)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
  }
  ngOnInit() {
    
    this.taskService.getFamilias()
      .subscribe(familias => {
          this.familias = familias;
          console.log(familias)
      });
    let x: string;
    this.route.queryParams.subscribe( queryParams => x = queryParams.id);
    //alert(x)
    if(x=="0"){
      //alert("TODOS")
      this.taskService.getAllProductos()
        .subscribe(productos2 => {
            this.productos2 = productos2;
            console.log(productos2)
      });
    }else{
      //alert("familia "+ x)
      this.taskService.getProductos(x)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
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
