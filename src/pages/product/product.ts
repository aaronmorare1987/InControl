import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from "../payment/payment";
import { ArrangementPage } from "../arrangement/arrangement";
import { HomePage } from "../home/home";
import { ProductValue } from "../../models/product";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})

export class ProductPage implements OnInit {

  produnpaid: Number = null;
  product: ProductValue;
  showTile = false;
  constructor(private http: HttpClient, public navCtrl: NavController) { }


  GetClientData(id: number) {

    const url = "http://localhost:59072/api/values/" + id;
    return this.http.get<any>(url)
      .subscribe(
      (data) => {
        this.product = { ...data };
        if (this.product.TotalAmount != 0) {
          this.showTile = true;
        }
      },
    );
  }
  ngOnInit() {
    this.GetClientData(1);

  }

}



