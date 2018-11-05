import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmationPage } from "../confirmation/confirmation";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {
  
  }

confirm(){
  this.navCtrl.push(ConfirmationPage)
  
}

}