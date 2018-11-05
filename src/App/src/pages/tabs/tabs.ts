import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import { Tab1Root, Tab2Root, Tab3Root } from '../';
import {Profile} from "../../models/profile";
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/take';
import { AngularFireDatabase } from 'angularfire2/database';
// @ts-ignore
import {FirebaseObjectObservable } from "angularfire2/database-deprecated"

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  profileData: FirebaseObjectObservable<Profile>;

  constructor(
    private toast: ToastController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController) {
    this.tab1Title = "Home";
    this.tab2Title = "Info";
    this.tab3Title = "User";
  }
  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data =>{
      if(data && data.email && data.uid) {
        this.toast.create({
          message: "Welcome to Doorman",
          duration: 2000,
          position: 'top'
        }).present();
        // @ts-ignore
        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
      else {
      }
    });
  }


}
