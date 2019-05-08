import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  private restaurant: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.restaurant = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  reservar() {

  }
}
