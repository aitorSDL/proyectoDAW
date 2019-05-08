import { Component } from '@angular/core';

import { ReservasPage } from '../reservas/reservas';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { SearchPage } from '../buscar/buscar';
import {DbApiService} from "../../shared/db-api.service";
import {ManagePage} from "../manage/manage";
import {AdminPage} from "../admin/admin";
import {AuthProvider} from "../../providers/auth/auth";
import {LoginPage} from "../login/login";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private user: any;
  searchTab = SearchPage;
  reservasTab = ReservasPage;
  configTab = ConfiguracionPage;
  isAdmin = false;
  manage = ManagePage;
  adminRoot = AdminPage;
  loginTab   = LoginPage;
  userLogged : boolean;
  constructor(public dbapi: DbApiService) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.user = AuthProvider.currentUser;
    AuthProvider.userLogged.subscribe({next: status => {
        console.log('el usuario ha cambiado de estado, ahora está ', status);
        this.userLogged = status;
      }});
    if (this.user.admin){
      this.isAdmin = true;
    }
  }
}
