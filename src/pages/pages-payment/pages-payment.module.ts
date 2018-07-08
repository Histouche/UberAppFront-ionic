import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesPaymentPage } from './pages-payment';

@NgModule({
  declarations: [
    PagesPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesPaymentPage),
  ],
})
export class PagesPaymentPageModule {}
