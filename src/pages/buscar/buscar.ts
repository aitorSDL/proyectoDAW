import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {DbApiService} from "../../shared/db-api.service";
import {RestaurantPage} from "../restaurant/restaurant";
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'buscar.html'
})
export class SearchPage {

  private restaurants = [];
  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public dbapi: DbApiService) {

  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad SearchPage");

    console.log(this.restaurants);


  }

  ionViewWillEnter(){
    console.log(this.restaurants);

    let loader = this.loadingController.create({
      content: 'Accediendo a los datos',
      spinner: 'dots'
    });

    loader.present();

    this.restaurants = [];

    this.dbapi.getListOf("restaurants")
      .then((snapshot) => {
        for (let k in snapshot) {
          this.restaurants.push({
            id          : k,
            name        : snapshot[k].name,
            cuisine : snapshot[k].cuisine,
            address       : snapshot[k].address,
            specialty: snapshot[k].specialty,
          })
        }
      })
      .then(() => this.restaurants = _.chunk(this.restaurants, 2))
      .then(() => loader.dismiss());

  }
  itemTapped(restaurant: any) {
    this.navCtrl.push(RestaurantPage, restaurant);

  }
}
