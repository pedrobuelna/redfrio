import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('mylbl') mylblRef: ElementRef;
  productos2: any;
  familias: any;
  valorSelect:any;
  valorOrdenar:any;
  x: string;
  checkValue(event){
    console.log("valor: "+this.valorSelect)
     let id = parseFloat(event.detail.value);
     let ordernarpor=$("#categoria_select2").val();
      this.taskService.getProductos(id,ordernarpor)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
  }
  filtroDestacados(event){
    let id=$("#categoria_select").val();
     let ordernarpor = event.detail.value;
     console.log("id: "+id)
     console.log("ordenamiento: "+ordernarpor)
      this.taskService.getProductos(id,ordernarpor)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
  }
  ngOnInit() {
    this.valorOrdenar="&order=destacado.desc"
    
      this.taskService.getFamilias()
      .subscribe(familias => {
          this.familias = familias;
          console.log(familias)
          this.route.queryParams.subscribe( queryParams => this.x = queryParams.id);
          this.valorSelect = this.x;
      });
    
    //alert(x)
    if(this.x=="0"){
      //alert("TODOS")
      this.taskService.getAllProductos()
        .subscribe(productos2 => {
            this.productos2 = productos2;
            console.log(productos2)
      });
    }else{
      //alert("familia "+ x)
      let ordernarpor=$("#categoria_select2").val();
      this.taskService.getProductos(this.x,ordernarpor)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
      });
    }
  }
  ionViewWillEnter(){
    this.route.queryParams.subscribe( queryParams => this.x = queryParams.id);
    this.valorOrdenar="&order=destacado.desc";
    this.taskService.getFamilias()
      .subscribe(familias => {
          this.familias = familias;
          console.log(familias)
          console.log(this.x)
          setTimeout(() => {
            alert(this.x+"a"+$("#categoria_select").val())
            $("#categoria_select").val(parseInt(this.x));
          }, 500);
      });
    
    
    //alert("x: "+x)
    //alert(x)
    if(this.x=="0"){
      ////alert("TODOS")
      this.taskService.getAllProductos()
        .subscribe(productos2 => {
            this.productos2 = productos2;
            console.log(productos2)
      });
    }else{
      ////alert("familia "+ x)
      let ordernarpor=$("#categoria_select2").val();
      this.taskService.getProductos(this.x,ordernarpor)
      .subscribe(productos2 => {
          this.productos2 = productos2;
          console.log(productos2)
          $("#categoria_select").val(parseInt(this.x));
      });
    }
  }
  onclickNotificaciones(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/notificaciones']);
  }
  onclickUbicaciones(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/ubicaciones']);
  }
  onclickMenu(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/principal']);
  }
  onclickCategorias(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/categorias']);
  }
  onclickUsuario(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/usuario']);
  }
  onclickProducto(id){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/producto'], {
      queryParams: {
          id: id
      }
    });
    //this.router.navigate(['/producto']);
  }
  onClickCarrito(){
    this.valorOrdenar="&order=destacado.desc"
    this.router.navigate(['/carrito']);
  }
}
