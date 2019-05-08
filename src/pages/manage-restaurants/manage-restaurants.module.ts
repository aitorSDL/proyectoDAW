import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageRestaurantsPage } from './manage-restaurants';

@NgModule({
  declarations: [
    ManageRestaurantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageRestaurantsPage),
  ],
})
export class ManageRestaurantsPageModule {}
