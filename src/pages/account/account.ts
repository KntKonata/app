import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
//import { ActDetailsPage } from "../act-details/act-details";
//import {GoogleMaps, MyLocation} from "@ionic-native/google-maps";
import {NativeGeocoder, NativeGeocoderReverseResult} from "@ionic-native/native-geocoder";

import { FirebaseProvider } from "../../providers/firebase/firebase";
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {



  /** **/
  map: any;
  public test;
  public myLat;
  public myLng;
  /** **/
  public myAccount = [];
  /** **/

  testItem: Observable<any>;

  constructor
  (
    public popoverCtrl: PopoverController,
    private _GEOCODE  : NativeGeocoder,
    public angFire: AngularFireDatabase,
  ){
    this.testItem = this.angFire.list('user/mfoureur').subscribe(snapshots=>{
      console.log('test1');
      snapshots.forEach(snapshot => {
        this.myAccount.push(snapshot.$value);
      });
    });
  }

  /*
    ionViewDidLoad() {
      this.findLocation();
    }

    findLocation() {
      this.map = GoogleMaps.create('test');
      // Get the location of you
      this.map.getMyLocation()
        .then((location: MyLocation) => {
          console.log(JSON.stringify(location, null ,2));

          this.myLat = location.latLng.lat;
          this.myLng = location.latLng.lng;

          this.reverseGeocode(location.latLng.lat, location.latLng.lng);

        });
    }

    reverseGeocode(lat : number, lng : number) : Promise<any> {
      return new Promise((resolve, reject) =>
      {
        this._GEOCODE.reverseGeocode(lat, lng)
          .then((result:NativeGeocoderReverseResult[]) =>
          {
            this.test = `${result[0].subThoroughfare} ${result[0].thoroughfare} - ${result[0].locality}`;
          })
          .catch((error: any) =>
          {
            reject(error);
          });
      });
    }

    presentPopover() {
      const popover = this.popoverCtrl.create(ActDetailsPage);
      popover.present();
    }
  */
}
