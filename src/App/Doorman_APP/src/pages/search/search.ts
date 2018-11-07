import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, ToastController} from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";
import { AngularFireDatabase } from "angularfire2/database";
// @ts-ignore
import {FirebaseObjectObservable } from "angularfire2/database-deprecated"
import {AngularFireAuth} from "angularfire2/auth";

import { tap } from "rxjs/operators";
import {FcmProvider} from "../../providers/fcm/fcm";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {DetailPage} from "../detail/detail";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  noteCollection: AngularFirestoreCollection<any>;
  notes: Observable<any>;
  items: any;
  loading: Loading;

  constructor(
    public loadingCtrl: LoadingController,
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

  selectItem(event, note) {
    this.showLoader();
    setTimeout(()=>{
      this.loading.dismissAll();
      this.navCtrl.push(DetailPage, {
        infoItem: note.imageUrl, LabelId: note.LabelId, userId: note.userId, date: note.date });
    },2000);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content:'Loading...'
    });
    this.loading.present();
  }

}
