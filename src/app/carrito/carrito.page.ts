import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(private router: Router) { }
  listas: Array<any>=[
    {
      nombre: "YORK MINISPLIT",
      descripcion: "YHFE/YHGE SERIES COMPRESOR ON/OFF R-410A SOLO FRIO Y FRIO/CALOR 220V ",
      precio:500
    },
    {
      nombre: "LG MINISPLIT",
      descripcion: "VR series inverter artcool wifi. 220v",
      precio:500
    }
  ];
  delete(id) {
    this.listas.splice(id, 1);
    if(this.listas.length==0){
      this.router.navigate(['/principal']);
    }
    
  }
  ngOnInit() {
    let x=0;
    $(".precio").each(function(i){
      x=x+(parseInt($(this).text()) * parseInt($(".cantidad").val()))
      alert(x)
    })
    
    $(".subtotal_numero").text("$ "+x)
    $(".total_btnpago").text(x)
    $( ".cantidad" ).change(function() {
      let valselect;
      let x=0;
      $(".subcontent_carrito").each(function(i){
        valselect = parseInt($(this).find(".cantidad").val())
        console.log("valor de select " + i +" "+ valselect)
        console.log("valor de cantidad "  + i +" "+ parseInt($(this).find(".precio").text()))
        console.log("Calculo total de cada 1 "  + i +" "+ parseInt(valselect) * parseInt($(this).find(".precio").text()))
        x=x+(parseInt(valselect) * parseInt($(this).find(".precio").text()))
      })
      $(".subtotal_numero").text("$ "+x)
      $(".total_btnpago").text(x)
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
    this.router.navigate(['/register']);
  }
  onclickProducto(){
    this.router.navigate(['/producto']);
  }
  onClickCarrito(){
    this.router.navigate(['/carrito']);
  }
  onClickCheckout(){
    this.router.navigate(['/checkout']);
  }
  
}
