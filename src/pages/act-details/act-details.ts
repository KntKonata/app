import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-act-details',
  templateUrl: 'act-details.html',
})
export class ActDetailsPage {

  testItem: Observable<any>;

  public myLogin = this.navParams.get('myLogin');

  constructor(public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActDetailsPage');
  }

  changeDispo(newDispo) {
    let ref = this.angFire.app.database().ref();
    let usersRef = ref.child("user");
    let hopperRef = usersRef.child(this.myLogin);
    hopperRef.update({"dispo": newDispo});
  }

}
