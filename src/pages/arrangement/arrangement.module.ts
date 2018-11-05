import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArrangementPage } from './arrangement';

@NgModule({
  declarations: [
    ArrangementPage,
  ],
  imports: [
    IonicPageModule.forChild(ArrangementPage),
  ],
})
export class ArrangementPageModule {}
