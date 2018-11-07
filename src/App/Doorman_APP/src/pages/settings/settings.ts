import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase,AngularFireObject } from "angularfire2/database";
import { ProfilePage } from "../profile/profile";
// @ts-ignore
import {FirebaseObjectObservable } from "angularfire2/database-deprecated"
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  profileData: AngularFireObject<any>;
  checkCollection: AngularFirestoreCollection<any>;
  infos: Observable<any>;
  private status1: string;
  constructor(public navCtrl: NavController,
    private afDatabase: AngularFireDatabase,
    public db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
    this.status1 = "Logout";

    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.checkCollection = db.collection<any>('notification');
        this.infos = this.checkCollection.valueChanges();
      }
      else {
        this.toast.create({
          message: 'Please Login',
          duration: 2000
        }).present();
        // @ts-ignore
        this.profileData = this.afDatabase.object(`profile`)
        this.status1 = "Login";

      }
    });
  }
  Logout1() {
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.push('WelcomePage');
    });
  }

}
