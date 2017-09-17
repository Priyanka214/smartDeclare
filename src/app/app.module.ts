import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeclarationPage } from '../pages/declaration/declaration';
//import { SegmentPage } from '../pages/declaration/segment';
import { Profile } from '../pages/declaration/profile';
import { IncomeTaxPage } from '../pages/incometax/incometax';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { RoundPipe } from './roundpipe';
import { Constants } from '../pages/declaration/constants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeclarationPage,
  //  SegmentPage,
    IncomeTaxPage,
    AboutusPage,
    RoundPipe,
    Profile
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeclarationPage,
  //  SegmentPage,
    IncomeTaxPage,
    AboutusPage,
    Profile
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
