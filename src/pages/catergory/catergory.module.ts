import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatergoryPage } from './catergory';

@NgModule({
  declarations: [
    CatergoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CatergoryPage),
  ],
})
export class CatergoryPageModule {}
