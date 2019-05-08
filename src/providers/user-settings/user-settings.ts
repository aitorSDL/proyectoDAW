import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

@Injectable()
export class UserSettingsProvider {

  constructor(private storage: Storage) {
    console.log('Hello UserSettingsProvider Provider');
  }

  login(user: any) {
    this.storage.set('user', user);
  }

  logout() {
    this.storage.clear();
  }

  async getCurrentUser() {
    return this.storage.get('user');
  }
}
