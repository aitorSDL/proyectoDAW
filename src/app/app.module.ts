import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ReservasPage } from '../pages/reservas/reservas';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { SearchPage } from '../pages/buscar/buscar';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { config} from "../environments/environment";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SignupPage} from "../pages/signup/signup";
import { DbApiService } from "../shared/db-api.service";
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthProvider} from "../providers/auth/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {UserSettingsProvider} from "../providers/user-settings/user-settings";
import {IonicStorageModule} from '@ionic/storage';
import {ManagePage} from "../pages/manage/manage";
import {RestaurantPage} from "../pages/restaurant/restaurant";
import {AdminPage} from "../pages/admin/admin";
import {ManageRestaurantsPage} from "../pages/manage-restaurants/manage-restaurants";
import {ManageProfilePage} from "../pages/manage-profile/manage-profile";
import {ManageUsersPage} from "../pages/manage-users/manage-users";
import {NewRestaurantPage} from "../pages/new-restaurant/new-restaurant";
import {EditRestaurantPage} from "../pages/edit-restaurant/edit-restaurant";

@NgModule({
  declarations: [
    MyApp,
    ReservasPage,
    ConfiguracionPage,
    SearchPage,
    TabsPage,
    LoginPage,
    SignupPage,
    ManagePage,
    RestaurantPage,
    AdminPage,
    ManageRestaurantsPage,
    ManageProfilePage,
    ManageUsersPage,
    NewRestaurantPage,
    EditRestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservasPage,
    ConfiguracionPage,
    SearchPage,
    TabsPage,
    LoginPage,
    SignupPage,
    ManagePage,
    RestaurantPage,
    AdminPage,
    ManageRestaurantsPage,
    ManageProfilePage,
    ManageUsersPage,
    NewRestaurantPage,
    EditRestaurantPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    DbApiService,
    AngularFireDatabase,
    UserSettingsProvider
  ]
})
export class AppModule {}
