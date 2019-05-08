import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SearchPage} from "../pages/buscar/buscar";
import {AuthProvider} from "../providers/auth/auth";
import {TabsPage} from "../pages/tabs/tabs";
import {UserSettingsProvider} from "../providers/user-settings/user-settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SearchPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private authProvider    : AuthProvider,
              private settings        : UserSettingsProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.loadUserFromLocal()
      .then(() => this.rootPage = TabsPage
      )
  }

  async loadUserFromLocal(){
    let userLocal: any;
    await this.settings.getCurrentUser().then(value => userLocal = value);
    console.log('storage', userLocal ? userLocal : 'nope');
    if (userLocal) {
      AuthProvider.currentUser = userLocal;
    }
    AuthProvider.userLogged.next(!!userLocal)
  }
}
