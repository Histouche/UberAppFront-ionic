import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvidersProfileDirective } from '../../directives/providers-profile/providers-profile';
import { IonicPage } from 'ionic-angular';
@IonicPage()

/**
 * Generated class for the PagesPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-payment',
  templateUrl: 'pages-payment.html',
})
export class PagesPaymentPage {

  userProfile: any;
  state: any;
  card: any;
  paymentType: any;
  cardnumber: any;
  constructor(public ph: ProvidersProfileDirective, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPaymentPage');
  }

  ionViewDidEnter() {
    var mainStr = this.ph.card || '2345678765445678',
      vis = mainStr.slice(-4),
      countNum = '';

    for(var i = (mainStr.length)-4; i>0; i--){
      countNum += '*';
    }
    this.cardnumber = countNum+vis;

    if (this.ph.paymentType != 1){
      this.paymentType = 'card'
    }else{
      this.paymentType = 'cash'
    }
  }

  updatePayment(value){
    this.ph.UpdatePaymentType(value)
    this.navCtrl.pop();
  }

  gotoCard(){
    if (this.ph.card != null){
      this.ph.UpdatePaymentType(2)
      this.navCtrl.pop();
    }else{
      this.navCtrl.push('CardPage')
    }
  }
}
