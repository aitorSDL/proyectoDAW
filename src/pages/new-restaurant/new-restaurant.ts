import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DbApiService} from "../../shared/db-api.service";

/**
 * Generated class for the NewRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-restaurant',
  templateUrl: 'new-restaurant.html',
})
export class NewRestaurantPage {
  private item:any;
  productForm: FormGroup;
  private categories:any;
  private ProductPhoto;
  private loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder,
              public dbapi: DbApiService,
              public loadingCtrl: LoadingController) {
    this.item = navParams.data;
    this.productForm = this.createForm();

    let loader = this.loadingCtrl.create({
      content: 'Accediendo a los datos',
      spinner: 'dots'
    });

    // loader.present().then(() => {
    //   this.dbapi.getCategories()
    //     .subscribe(data => {
    //       this.categories = data;
    //       console.log(this.categories);
    //     });
    //
    //   loader.dismiss();
    //
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStockPage');
  }

  private createForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      address: ['', Validators.required],
      specialty: ['', Validators.required],
    });
  }

  saveData(){
    console.log("uploading");
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.dbapi.uploadItem(
      this.productForm.value.name,
      this.productForm.value.cuisine,
      this.productForm.value.address,
      this.productForm.value.specialty.toString().split("\n").join("").replace(/\s/g, "").split(",")
    );

    this.loading.dismiss();

  }

  backToManage(){
    this.navCtrl.pop();
  }
}
