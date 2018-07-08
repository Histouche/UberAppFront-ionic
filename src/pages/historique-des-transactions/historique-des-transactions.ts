import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersEventEventDirective } from '../../directives/providers-event-event/providers-event-event';
import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-historique-des-transactions',
  templateUrl: 'historique-des-transactions.html'
})
export class HistoriqueDesTransactionsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public eventList: Array<any>;
  constructor(public navCtrl: NavController, public eventProvider: ProvidersEventEventDirective) {
  }

  ionViewDidEnter() {
    this.eventProvider.getEventList().on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination
        });
        return false
      });
    });
  }

  goToEventDetail(eventId){
    //  this.navCtrl.push('history-details', { 'eventId': eventId });
  }
}
