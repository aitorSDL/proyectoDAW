import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRestaurantPage } from './new-restaurant';

@NgModule({
  declarations: [
    NewRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRestaurantPage),
  ],
})
export class NewRestaurantPageModule {}
