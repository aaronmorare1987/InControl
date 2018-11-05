import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatergoryPage } from "../catergory/catergory";
import {ProductPage} from "../product/product";

@Component({
  selector: 'page-Home',
  templateUrl: 'Home.html'
})
export class HomePage {

  public totalunpaid : Number = 200;
  public produnpaid  : Number = null;
  constructor(public navCtrl: NavController) {

  }
  
companies(){
  this.navCtrl.push(CatergoryPage)
  
}

}
