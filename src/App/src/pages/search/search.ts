import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";
import { AngularFireDatabase } from "angularfire2/database";
// @ts-ignore
import {FirebaseObjectObservable } from "angularfire2/database-deprecated"
import {AngularFireAuth} from "angularfire2/auth";

import { tap } from "rxjs/operators";
import {FcmProvider} from "../../providers/fcm/fcm";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  noteCollection: AngularFirestoreCollection<any>;
  notes: Observable<any>;
  items: any;
  constructor(
    public navCtrl: NavController,
  public db: AngularFirestore,
  public toastCtrl: ToastController,
  public fcm: FcmProvider
  ) {
    this.noteCollection = db.collection<any>('notification');
    this.notes = this.noteCollection.valueChanges();

  }
  initializeItems() {
    // @ts-ignore
    this.items = this.notes[0]
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
