import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NouvelleCoursePage } from '../nouvelle-course/nouvelle-course';
import { HistoriqueDesTransactionsPage } from '../historique-des-transactions/historique-des-transactions';
import { MonProfilPage } from '../mon-profil/mon-profil';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NouvelleCoursePage;
  tab2Root: any = HistoriqueDesTransactionsPage;
  tab3Root: any = MonProfilPage;
  constructor(public navCtrl: NavController) {
  }
  
}
