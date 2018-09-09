import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { MsgDetailsPage } from "../msg-details/msg-details";
import { MsgNewPage } from "../msg-new/msg-new";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParm: NavParams, private plt: Platform) {
    this.plt.ready().then(() => {
      //wot
    })
  }

  goToPush(page, id) {
    switch(page){
      case 'MsgDetailsPage':
        this.navCtrl.push(MsgDetailsPage, {msgId: id});
        break;
      case 'MsgNewPage':
        this.navCtrl.push(MsgNewPage, {msgId: id});
        break;
    }
  }

}
