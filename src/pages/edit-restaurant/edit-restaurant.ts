import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DbApiService} from "../../shared/db-api.service";

/**
 * Generated class for the EditRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-restaurant',
  templateUrl: 'edit-restaurant.html',
})
export class EditRestaurantPage {

  private item:any;
  productForm: FormGroup;
  private loading : Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder,
              public dbapi: DbApiService,
              public loadingCtrl : LoadingController
  ) {
    this.item = navParams.data;
    this.productForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRestaurantPage',this.item);
  }
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      address: ['', Validators.required],
      specialty: ['', Validators.required],
    });
  }

  private pushNewUserData() {
    console.log("uploading", this.productForm);
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.dbapi.pushItem(
      this.productForm.value.name,
      this.productForm.value.cuisine,
      this.productForm.value.address,
      this.productForm.value.specialty.toString().split("\n").join("").replace(/\s/g, "").split(","),
      this.item.id
    );
    this.loading.dismiss();
  }

  backToManage() {
    this.navCtrl.pop();

  }

}
