import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DbApiService} from "../../shared/db-api.service";
import {AuthProvider} from "../../providers/auth/auth";

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

  public restaurant: any;
  public alreadyReserved = false;
  private reserve: any;
  private userLogged: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public events: Events,
              public dbapi: DbApiService) {

    this.restaurant = navParams.data;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad RestaurantPage');

  }

  ionViewWillEnter(){
    AuthProvider.userLogged.subscribe({next: status => {
        console.log('el usuario ha cambiado de estado, ahora está ', status);
        this.userLogged = status;
      }});
    let userReserv = [];
    if (this.userLogged) {
      let reservations = this.dbapi.getUserReservations()
        .then((snapshot) => {
          for (let k in snapshot) {
            userReserv.push({
              id: k,
              restaurant: snapshot[k].restaurant,
              date: snapshot[k].date
            });
            // console.log("TEEEST", userReserv.restaurant.id);
            if (snapshot[k].restaurant.id == this.restaurant.id) {
              this.alreadyReserved = true;
              this.reserve = k;
              console.log(this.reserve);
            }
          }
        });
    }
  }

  removeReserve() {

    let reservationId = this.reserve;
    console.log(reservationId);
    this.dbapi.removeReserv(reservationId)
      .then(() => {
        this.navCtrl.pop();
      });
  }
}
