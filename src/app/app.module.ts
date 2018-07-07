import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NouvelleCoursePage } from '../pages/nouvelle-course/nouvelle-course';
import { HistoriqueDesTransactionsPage } from '../pages/historique-des-transactions/historique-des-transactions';
import { MonProfilPage } from '../pages/mon-profil/mon-profil';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

// Native components 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    NouvelleCoursePage,
    HistoriqueDesTransactionsPage,
    MonProfilPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NouvelleCoursePage,
    HistoriqueDesTransactionsPage,
    MonProfilPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}