import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/Message/Message';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CatergoryPage } from "../pages/catergory/catergory";
import { ProductPage } from "../pages/product/product";
import { PaymentPage } from "../pages/payment/payment";
import { ConfirmationPage } from "../pages/confirmation/confirmation";
import { ArrangementPage } from "../pages/arrangement/arrangement";
import { LoginPage } from "../pages/login/login";
import { IndexPage } from "../pages/index/index";
import { ProductValue } from "../models/product";
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessagePage,
    CatergoryPage,
    ProductPage,
    PaymentPage,
    ConfirmationPage,
    ArrangementPage,
    LoginPage,
    IndexPage
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessagePage,
    CatergoryPage,
    ProductPage,
    PaymentPage,
    ConfirmationPage,
    ArrangementPage,
    LoginPage,
    IndexPage,
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
