import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the WatchingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watching-list',
  templateUrl: 'watching-list.html',
})
export class WatchingListPage {
  arrData = [];
  myInput;
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
    });
  }
  btnAddClicked() {
    this.fdb.list("/myItems/").push(this.myInput);
  }
  deleteItem(i) {
    this.fdb.list("/myItems/").remove(this.arrData[i].$key);
  }
}
