import {
    Injectable
} from '@angular/core';
import {
    Platform
} from '@ionic/angular';
import {
    HttpClient
} from '@angular/common/http';
import {
    BehaviorSubject,
    Observable
} from 'rxjs';
import {
    SQLitePorter
} from '@ionic-native/sqlite-porter/ngx';
import {
    SQLite,
    SQLiteObject
} from '@ionic-native/sqlite/ngx';
import {
    AppTable
} from './app-table';
import {
    CarritoTable,
    CarritoActivo,
} from './carrito-table';


@Injectable({
    providedIn: 'root'
})
export class DbService {
    private storage: SQLiteObject;
    app_table = new BehaviorSubject([]);
    carrito_table = new BehaviorSubject([]);
    carrito_activo= new BehaviorSubject([]);

    private isDbReady: BehaviorSubject < boolean > = new BehaviorSubject(false);

    constructor(
        private platform: Platform,
        private sqlite: SQLite,
        private httpClient: HttpClient,
        private sqlPorter: SQLitePorter,
    ) {
        this.platform.ready().then(() => {
            this.sqlite.create({
                    name: 'reacsa.db',
                    location: 'default'
                })
                .then((db: SQLiteObject) => {
                    this.storage = db;
                    this.createTables();
                });
        });
    }
    dbState() {
        return this.isDbReady.asObservable();
    }
    createTables() {

        this.httpClient.get(
            'assets/tables.sql', {
                responseType: 'text'
            }
        ).subscribe(data => {
            this.sqlPorter.importSqlToDb(this.storage, data)
                .then(_ => {
                    this.getCarritoActivoData();
                    this.isDbReady.next(true);
                })
                .catch(error => console.error(error));
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    //CARRITO ACTIVO
    //////////////////////////////////////////////////////////////////////////////
    fetchCarritoActivoData(): Observable<CarritoActivo[]> {
        return this.carrito_activo.asObservable();
    }
    getCarritoActivoData(){
        return this.storage.executeSql('SELECT * FROM carritoData WHERE id=1', []).then(res => {
            let items: any[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        cantidadCarrito:res.rows.item(i).cantidadCarrito,
                        uuid_carrito:res.rows.item(i).uuid_carrito,
                    });
                }
            }
            this.carrito_activo.next(items);
        });
    }
    setCantidadCarrito(cantidad:number){
        let data = [cantidad];
        return this.storage.executeSql(`UPDATE carritoData SET cantidadCarrito = ?  WHERE id=1`, data)
            .then(_ => {
                this.getCarritoActivoData();
            });
    }
    setCarritoActivo(uuid_carrito:string,cantidadCarrito:number){
        let data = [uuid_carrito,cantidadCarrito];
        return this.storage.executeSql(`UPDATE carritoData SET uuid_carrito = ?, cantidadCarrito = ?  WHERE id=1`, data)
            .then(_ => {
                this.getCarritoActivoData();
            });
    }
}