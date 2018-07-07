import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-historique-des-transactions',
  templateUrl: 'historique-des-transactions.html'
})
export class HistoriqueDesTransactionsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
