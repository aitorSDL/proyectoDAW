import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPage } from './restaurant';
import {DateTimeComponent} from "../../components/date-time/date-time";

@NgModule({
  declarations: [
    RestaurantPage,
    DateTimeComponent
  ],
  imports: [
    IonicPageModule.forChild(RestaurantPage),
  ],
})
export class RestaurantPageModule {}
