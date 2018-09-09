import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  /** ***************** **/
  /** ****USER DATA**** **/
  /** ***************** **/

  getUser() {
    return this.afd.object('/user/');
  }


  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }

  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }

  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }
}
