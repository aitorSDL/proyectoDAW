import {Component, ElementRef, ViewChild} from '@angular/core';
import {Events, NavController, NavParams} from "ionic-angular";
import {DbApiService} from "../../shared/db-api.service";
import {RestaurantPage} from "../../pages/restaurant/restaurant";
import {ReservasPage} from '../../pages/reservas/reservas';

/**
 * Generated class for the DateTimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'date-time',
  templateUrl: 'date-time.html'
})
export class DateTimeComponent {


  restaurant: any;
  private alreadyReserved: boolean = false;

  constructor(public events: Events,
              public dbapi: DbApiService,
              public navParams: NavParams,
              private restaurantPage: RestaurantPage,
              private navCtrl: NavController) {

    console.log('Hello DateTimeComponent Component');

    this.restaurant = this.restaurantPage.restaurant;
    console.log("RESTAURANTE: ", this.restaurant);
  }

  reservar(date){
    console.log("Fecha seleccionada:", date);
    this.dbapi.makeReservation(this.restaurant, date);
    this.navCtrl.push(ReservasPage);
  }
}
