import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

/*            */

import { MyApp } from './app.component';

import { HomePage } from "../pages/home/home";
import { TabsPage } from '../pages/tabs/tabs';

import { AccountPage } from "../pages/account/account";
import { ActDetailsPage } from "../pages/act-details/act-details";

import { AgendaPage } from "../pages/agenda/agenda";
import { CalDetailsPage } from "../pages/cal-details/cal-details";
import { AgdMapPage } from "../pages/agd-map/agd-map";

import { MessagePage } from "../pages/message/message";
import { MsgDetailsPage } from "../pages/msg-details/msg-details";
import { MsgNewPage } from "../pages/msg-new/msg-new";

import { NotifPage } from "../pages/notif/notif";


/*            */

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAlKofmUNMYNPB0F1IEOLa373Pr_Iy4Hew",
  authDomain: "taxialain-e16f4.firebaseapp.com",
  databaseURL: "https://taxialain-e16f4.firebaseio.com",
  projectId: "taxialain-e16f4",
  storageBucket: "taxialain-e16f4.appspot.com",
  messagingSenderId: "129064210858"
};

/*            */

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Calendar } from '@ionic-native/calendar';
import { GoogleMaps } from '@ionic-native/google-maps';
import { GeocoderProvider } from '../providers/geocoder/geocoder';

import { NativeGeocoder } from '@ionic-native/native-geocoder'

@NgModule({
  declarations: [
    MyApp,
    //
    HomePage,
    TabsPage,
    //
    AccountPage,
    ActDetailsPage,
    //
    AgendaPage,
    CalDetailsPage,
    AgdMapPage,
    //
    MessagePage,
    MsgDetailsPage,
    MsgNewPage,
    //
    NotifPage,
  ],
  imports: [
    FormsModule,
    MbscModule,
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //
    HomePage,
    TabsPage,
    //
    AccountPage,
    ActDetailsPage,
    //
    AgendaPage,
    CalDetailsPage,
    AgdMapPage,
    //
    MessagePage,
    MsgDetailsPage,
    MsgNewPage,
    //
    NotifPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    GoogleMaps,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeocoderProvider,
    FirebaseProvider,
  ]
})
export class AppModule {}
