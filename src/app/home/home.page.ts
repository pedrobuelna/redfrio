import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AlertController } from '@ionic/angular';
import { Task } from '../interfaces/task';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

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
  private database: SQLiteObject;

  constructor(private router: Router,
    private sqlite: SQLite,
    public alertController: AlertController,
    private taskService: TaskService) {}
  iraLogin(){
    this.router.navigate(['/login']);
  }
  ngOnInit(){
    //this.getAllTasks();
    
  // this.sqlite.create({
  //   name: 'data.db',
  //   location: 'default'
  // })

  // this.database.executeSql('create table danceMoves(name VARCHAR(32))', [])
  //     .then(() => console.log('Executed SQL'))
  //     .catch(e => console.log(e));


  }
  // getAllTasks() {
  //   this.taskService.getAllTasks()
  //   .subscribe(tasks => {
  //     console.log(tasks);
  //   });
  // }
}
