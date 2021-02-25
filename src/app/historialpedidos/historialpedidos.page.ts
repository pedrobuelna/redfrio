import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-historialpedidos',
  templateUrl: './historialpedidos.page.html',
  styleUrls: ['./historialpedidos.page.scss'],
})
export class HistorialpedidosPage implements OnInit {

  constructor(private taskService: TaskService,private nativeStorage: NativeStorage,
    private router: Router) { }
    pedidos:any;
  ngOnInit() {
    this.nativeStorage.getItem('app')
    .then(
        app => {
            console.log("==APP DATA==");
            console.log(app);
            console.log("uuid_cliente: " + app.uuid_cliente);
            this.taskService.getHistorialPedidos(app.uuid_cliente)
            .subscribe(pedidos => {
                this.pedidos = pedidos;
                console.log("pedidos: ", pedidos);
            });
        },
        error => console.error("NO HAY UUID_CLIENTE")
    );
  }
  
}
