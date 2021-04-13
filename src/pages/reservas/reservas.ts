import { Component } from '@angular/core';
import {Loading, LoadingController, NavController} from 'ionic-angular';
import {RestaurantPage} from "../restaurant/restaurant";
import {DbApiService} from "../../shared/db-api.service";

@Component({
  selector: 'page-about',
  templateUrl: 'reservas.html'
})
export class ReservasPage {

  userReserv: any = [];
  private loading: Loading;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public dbapi: DbApiService) {

  }

  ionViewWillEnter(){

    this.userReserv = [];

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.dbapi.getUserReservations()
      .then((snapshot) => {
        for (let k in snapshot) {
          this.userReserv.push({
            id: k,
            restaurant: snapshot[k].restaurant,
            date: snapshot[k].date
          })
        }
      })
      .then(() => this.loading.dismiss());
    console.log("Restaurantes:", this.userReserv);
  }
  restaurantDetail(item){
    console.log(item);
    this.navCtrl.push(RestaurantPage, item.restaurant);
  }

  removeReservation(item){
    let reservationId = item.id;
    console.log(reservationId);
    this.dbapi.removeReserv(reservationId);
    this.navCtrl.setRoot(ReservasPage);
  }
}
