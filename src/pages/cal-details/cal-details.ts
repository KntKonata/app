import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AgdMapPage } from "../agd-map/agd-map";

@Component({
  selector: 'page-cal-details',
  templateUrl: 'cal-details.html',
})
export class CalDetailsPage {
  public courseId = this.navParams.get('courseId');

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {}

  goToPush(id) {
    this.navCtrl.push(AgdMapPage, {courseId: id});
  }

}
