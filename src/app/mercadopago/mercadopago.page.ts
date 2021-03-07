import { Component, OnInit } from '@angular/core';
//import { TaskService } from '../services/task.service';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

declare var Mercadopago: any;
@Component({
  selector: 'app-mercadopago',
  templateUrl: './mercadopago.page.html',
  styleUrls: ['./mercadopago.page.scss'],
})
export class MercadopagoPage implements OnInit {
  constructor(public httpClient: HttpClient,private httpParamsOptions: HttpParams) {
     Mercadopago.setPublishableKey("TEST-69dfb38e-83ef-40bf-bef8-03459cc6fca9");
     Mercadopago.getIdentificationTypes();
     console.log(Mercadopago);
     console.log("TOKEN: " + Mercadopago.tokenId)
    // this.taskService.setMercadoPagoToken(Mercadopago.tokenId).subscribe((token)=>{
    //   console.log(token)
    // },er=>{});
  }
  sendPostRequest() {
  }
  ngOnInit() {
    let headers: HttpHeaders = new HttpHeaders();
    //headers.append('Access-Control-Allow-Origin' , '*');
    //headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Access-Control-Allow-Credentials' , 'true');
    headers.append('Content-Type', 'application/json' );
    headers.append("Authorization", 'Bearer TEST-2911076993776931-012717-e1076c951bf583a0ca2fddd6044de370-653952398');
    var options = { headers: headers, withCredentials: true };
    //const requestOpciones = new HttpParams(headers);
    let postData = {
      "token": Mercadopago.tokenId,
      "installments": 1,
      "transaction_amount": 58.80,
      "description": "Point Mini a maquininha que dá o dinheiro de suas vendas na hora",
      "payment_method_id": "visa",
      "payer": {
        "email": "test_user_123456@testuser.com",
        "identification": {
                "number": "19119119100",
                "type": "CPF"
            }
      },
      "notification_url": "https://www.suaurl.com/notificacoes/",
      "sponsor_id": null,
      "binary_mode": false,
      "external_reference": "MP0001",
      "statement_descriptor": "MercadoPago",
      "additional_info": {
        "items": [
          {
            "id": "PR0001",
            "title": "Point Mini",
            "description": "Producto Point para cobros con tarjetas mediante bluetooth",
            "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
            "category_id": "electronics",
            "quantity": 1,
            "unit_price": 58.80
          }
        ],
        "payer": {
          "first_name": "Nome",
          "last_name": "Sobrenome",
          "address": {
            "zip_code": "06233-200",
            "street_name": "Av das Nacoes Unidas",
            "street_number": 3003
          },
          "registration_date": "2019-01-01T12:01:01.000-03:00",
          "phone": {
            "area_code":"011",
            "number":"987654321"
          }
        },
        "shipments": {
          "receiver_address": {
            "street_name": "Av das Nacoes Unidas",
            "street_number": 3003,
            "zip_code": "06233200",
            "city_name": "Buzios",
            "state_name": "Rio de Janeiro"
          }
        }
        }
    }
    this.httpClient.post("https://api.mercadopago.com/v1/payments", postData, options)
      .subscribe(data => {
        console.log("DATA1: " + data);
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
    // let Mercadopago: any;
    // Mercadopago.setPublishableKey("");
    // debugger;
    // Mercadopago.getIdentificationTypes();
    // this.Mercadopago.setPublishableKey("TEST-69dfb38e-83ef-40bf-bef8-03459cc6fca9");
    // debugger;
    // this.Mercadopago.getIdentificationTypes();
  }

}
