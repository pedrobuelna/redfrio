import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { $ } from 'protractor';
declare var google;
  
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
// interface markers {
//   id_sucursal: string,
//   sid_sucursal: string,
//   nombre: string,
//   status: string,
//   telefono_1: string,
//   telefono_2: string,
//   mail: string,
//   coordenadas: string,
//   url_maps: string,
//   creation_date: string,
//   update_date: string,
//   direccion: string
// }
export class SucursalesPage implements OnInit {
  @ViewChild("splash") splash: ElementRef;
  map = null;
  ciuda:string;
  
  titulo: any;
  
  constructor(private router: Router,private renderer: Renderer2,
    private taskService: TaskService) { }
  
  checkValue(event){
    console.log("CECK")
    //var str = event.target.value;
    // var latlng = str.split(" ");
    // console.log(latlng[0]+"long: " +latlng[1])
    //console.log(str)
    //this.getAllTasks();
    //console.log(this.markers.length);
    // for(let i=0;i<this.markers.length;i++){
    //   if(this.markers[i].nombre == this.router.getCurrentNavigation().extras.state.ciudad){
    //     this.titulo = this.markers[i].title;
    //     let coord = this.markers[i].coordenadas.split(", ");
    //     this.loadMap(coord[0],coord[1]);
    //     break;
    //   }
    // }
    //this.map.panTo({lat:parseFloat(latlng[0]), lng:parseFloat(latlng[1])})
    //alert(latlng[2])
    // if(latlng[2] == "Aguascalientes"){
    //   //this.titulo = this.markers[0].title
    // }else if(latlng[2] == "Mazatlan"){
    //   //this.titulo = this.markers[1].title
    // } 
  }
  markers: any;
  cantmarkers:any;
  
  
  ngOnInit() {
    this.getAllTasks();
    let m = this.getMarkers();
    console.log(m)
    this.markers = this.getAllTasks();
    console.log("init CIUDAD: "+ this.router.getCurrentNavigation().extras.state.ciudad)
    console.log("init cantMARKERS: "+ this.cantmarkers)
    console.log("init MARKERS: "+ this.markers)
    
    for(let i=0;i<parseInt(this.cantmarkers);i++){
      console.log("FOR: " + this.markers[i].nombre)
      if(this.markers[i].nombre == this.router.getCurrentNavigation().extras.state.ciudad){
        console.log("MARKERS: " + this.markers[i])
        //this.titulo = this.markers[i].title;
        let coord = this.markers[i].coordenadas.split(", ");
        //this.loadMap(coord[0],coord[1]);
        break;
      }
    }
  }
  setMarkers(tasks){
    this.markers = tasks
  }
  getMarkers(){
    return this.markers
  }
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      this.setMarkers(tasks);
      // this.markers = tasks;
      // this.cantmarkers = this.markers.length;
      // console.log("MARKERS: " + parseInt(this.cantmarkers));
      // this.cantmarkers = 30;
    });
  }
  // loadMap(lat,long) {
  //   // create a new map by passing HTMLElement
  //   const mapEle: HTMLElement = document.getElementById('map');
  //   // create LatLng object
  //   const myLatLng = {lat: lat, lng: long};
  //   //Obtener coordenadas
  //   const latLng = new google.maps.LatLng();
    
  //   // create map
  //   this.map = new google.maps.Map(mapEle, {
  //     center: myLatLng,
  //     zoom: 10,
  //     disableDefaultUI:true
  //   });
  //   let infoWindow;
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };
  //         // infoWindow.setPosition(pos);
  //         // infoWindow.setContent("Location found.");
  //         // infoWindow.open(this.map);
  //         this.map.setCenter(pos);
  //       },
  //       () => {
  //         //handleLocationError(true, infoWindow, this.map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     alert("Error de Geolocalizacion")
  //   }

  //   google.maps.event.addListenerOnce(this.map, 'idle', () => {
  //     //this.renderMarkers();
  //     mapEle.classList.add('show-map');
  //     this.renderMarkers();
  //   });
  // }
  // addMarker(marker: Marker) {
  //   return new google.maps.Marker({
  //     position: marker.position,
  //     map: this.map,
  //     title: marker.title
  //   });
    
  // }
  // renderMarkers() {
  //   this.markers.forEach(marker => {
  //     this.addMarker(marker);
  //   });
  // }
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
