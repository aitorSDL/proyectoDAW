import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {DbApiService} from "../../shared/db-api.service";
import {ManageProfilePage} from "../manage-profile/manage-profile";

@Component({
  selector: 'page-contact',
  templateUrl: 'configuracion.html'
})
export class ConfiguracionPage {


  private user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dbapi: DbApiService,
              public authProvider: AuthProvider,
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProfilePage',this.user);
  }

  ionViewWillEnter(){
    this.user = AuthProvider.currentUser;
  }

  signOut(){
    this.authProvider.logoutUser();
  }

  manageProfile() {
    this.navCtrl.push(ManageProfilePage, this.user);
  }
}
