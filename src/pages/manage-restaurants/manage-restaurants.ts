import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';
import {DbApiService} from "../../shared/db-api.service";
import {NewRestaurantPage} from "../new-restaurant/new-restaurant";
import {EditRestaurantPage} from "../edit-restaurant/edit-restaurant";

/**
 * Generated class for the ManageRestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-restaurants',
  templateUrl: 'manage-restaurants.html',
})
export class ManageRestaurantsPage {

  stock_data: any = [];
  private loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public dbapi: DbApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageStockPage');
  }

  ionViewWillEnter(){
    let data = [];

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.dbapi.getListOf("restaurants")
      .then((snapshot) => {
        for (let k in snapshot) {
          data.push({
            id: k,
            name: snapshot[k].name,
            cuisine: snapshot[k].cuisine,
            address: snapshot[k].address
          })
        }
        this.stock_data = data;
      })
      .then(() => this.loading.dismiss());
  }
  itemDelete(product){
    this.stock_data.splice(this.stock_data.findIndex(
      (productId) => {return productId.id == product.id }
      ),1
    );
    this.dbapi.deleteItem(product);
  }
  itemTappedAdmin(product:any) {
    this.navCtrl.push(RestaurantPage,product)

  }
  editItem(item) {
    this.navCtrl.push(EditRestaurantPage,item);
  }

  uploadItem() {
    this.navCtrl.push(NewRestaurantPage);
  }

}
