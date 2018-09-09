import { Component } from '@angular/core';
import { NavParams, NavController, Platform } from 'ionic-angular';
import { CalDetailsPage } from "../cal-details/cal-details";

import { FirebaseProvider } from "../../providers/firebase/firebase";
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  public shoppingItems: FirebaseListObservable<any[]>;
  public newItem = '';

  public date;
  public today = new Date();

  constructor(public navCtrl: NavController, public navParm: NavParams, private plt: Platform, public firebaseProvider: FirebaseProvider) {
    this.plt.ready().then(() => {
      this.date = this.today.toLocaleDateString();
      this.shoppingItems = this.firebaseProvider.getShoppingItems();
    })
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  goToPush(id) {
    this.navCtrl.push(CalDetailsPage, {courseId: id});
  }

}
