import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mon-profil',
  templateUrl: 'mon-profil.html'
})
export class MonProfilPage {
  // this tells the tabs component which Pages
  nom: any = "Jonathan Rodrigues";
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
