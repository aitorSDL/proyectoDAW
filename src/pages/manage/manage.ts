import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NewRestaurantPage} from "../new-restaurant/new-restaurant";
import {RestaurantPage} from "../restaurant/restaurant";
import {EditRestaurantPage} from "../edit-restaurant/edit-restaurant";
import {DbApiService} from "../../shared/db-api.service";

/**
 * Generated class for the ManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {

  user_stock: any = [];
  private loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public dbapi: DbApiService,
              public alertCtrl: AlertController) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ManageUserStockPage');

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.dbapi.getStockOfUser()
      .then((snapshot) => {
        this.user_stock = [];
        for (let k in snapshot) {
          this.user_stock.push({
            id          : k,
            name        : snapshot[k].name,
            cuisine     : snapshot[k].cuisine,
            address     : snapshot[k].address,
            specialty   : snapshot[k].specialty,
            publisher      : snapshot[k].publisher

          })
        }
      })
      .then(() => this.loading.dismiss());
  }

  itemDelete(product){
    const confirm = this.alertCtrl.create({
      title: '¿Estás seguro?',
      message: 'Se eliminará para siempre',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.user_stock.splice(this.user_stock.findIndex(
              (productId) => {return productId.id == product.id }
              ),1
            );
            this.dbapi.deleteItem(product);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  editItem(item) {
    this.navCtrl.push(EditRestaurantPage,item);
  }

  uploadItem() {
    this.navCtrl.push(NewRestaurantPage);
  }

  restaurantDetail(item){
    this.navCtrl.push(RestaurantPage,item);
  }

}
