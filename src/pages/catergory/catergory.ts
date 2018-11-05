import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from "../product/product";

@Component({
  selector: 'page-catergory',
  templateUrl: 'catergory.html'
})
export class CatergoryPage {

  public catunpaid : Number = null;
  constructor(public navCtrl: NavController) {
  
  this.catunpaid = 450.67;
  }


products(){
  this.navCtrl.push(ProductPage)
  
}

}