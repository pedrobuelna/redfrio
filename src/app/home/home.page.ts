import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AlertController } from '@ionic/angular';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Inventario Taller';
  tasks: Task[] = [];
  nombre_refaccion: string;
  stock: string;
  locker: string;
  id_refaccion: string;
  alertCtrl: AlertController;
  constructor(private router: Router,
    private taskService: TaskService) {}
  iraLogin(){
    this.router.navigate(['/login']);
  }
  ngOnInit(){
    //this.getAllTasks();
  }
  // getAllTasks() {
  //   this.taskService.getAllTasks()
  //   .subscribe(tasks => {
  //     console.log(tasks);
  //   });
  // }
}
