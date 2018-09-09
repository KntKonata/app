import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalDetailsPage } from './cal-details';

@NgModule({
  declarations: [
    CalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalDetailsPage),
  ],
})
export class CalDetailsPageModule {}
