import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ManageUsersPage} from "../manage-users/manage-users";
import {ManageRestaurantsPage} from "../manage-restaurants/manage-restaurants";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  manageUsers() {
    this.navCtrl.push(ManageUsersPage);
  }

  manageStock() {
    this.navCtrl.push(ManageRestaurantsPage);
  }
}
