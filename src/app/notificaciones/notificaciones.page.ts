import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import { DatePipe } from '@angular/common';
import {TaskService} from '../services/task.service';
import { Notificacion } from '../interfaces/task';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  providers: [DatePipe]
})
export class NotificacionesPage implements OnInit {
  dataReturned: any;
  tasks: Notificacion[] = [];
  notificaciones:any;
  cantidadNot:any;
  constructor(private router: Router,private datePipe: DatePipe,
    private taskService: TaskService,
    public modalController: ModalController) { 
      
    }
    currentDate:any  = new Date();
    uuid_cliente:any = "8e96af95-4575-47e9-a2aa-b56aba2f035f";
    uuid_notificacion:any;
    listas: any;
    // lista: Array<any> = [
    //   {
    //     titulo: "Oferta de fin de semana",
    //     fecha:"12 de Nov. 2020",
    //     descripcion: "6 Meses sin intereses! <br> Detalles de oferta.",
    //     url_imagen: "../../assets/images/imgnot2.png",
    //     estatus:0
    //   },
    //   {
    //     titulo: "Oferta de fin de semana 2",
    //     fecha:"12 de Nov. 2020",
    //     descripcion: "6 Meses sin intereses! <br> Detalles de oferta.",
    //     url_imagen: "../../assets/images/imgnot1.png",
    //     estatus:0
    //   },
    //]
    
    async openModal(index) {
      this.uuid_notificacion = this.listas[index].uuid_notificacion
      
      const modal = await this.modalController.create({
        component: MyModalPage,
        componentProps: {
          "titulo": this.listas[index].titulo,
          "descripcion": this.listas[index].descripcion,
          "url_imagen": this.listas[index].url_imagen,
          "fecha": this.listas[index].fecha,
          "uuid_cliente": this.uuid_cliente,
          "uuid_notificacion": this.listas[index].uuid_notificacion,
          "status": this.listas[index].status,
        }
        
      });
      const Notificacion = {
        status: "1"
      };
      this.taskService.updateNotificacion(Notificacion,this.uuid_cliente,this.uuid_notificacion)
      .subscribe(listas => {
        this.taskService.getNotificaciones()
        .subscribe(listas => {
            this.listas = listas;
        });
        this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length

      });
        this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
      });
      
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });
      
      return await modal.present();
      
    }
  ngOnInit() {
    this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length
          
      });
    this.taskService.getNotificaciones()
      .subscribe(listas => {
          this.listas = listas;
    });
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
  }
  ionViewWillEnter(){
    this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length
      });
  }
  onclickNotificaciones(){
    this.taskService.getNotificaciones()
      .subscribe(listas => {
          this.listas = listas;
    });
    this.taskService.getNotificacionesNoLeidas()
      .subscribe(notificaciones => {
          this.notificaciones = notificaciones;
          this.cantidadNot = this.notificaciones.length
      });
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
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
