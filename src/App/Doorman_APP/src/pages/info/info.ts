import { Component } from '@angular/core';
import {IonicPage, NavController,} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {AddingPage} from "../adding/adding";

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
  }
  uploaditems() {
    this.navCtrl.setRoot('AddingPage')
  }
}
