import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoogleCloudVisionServiceProvider} from "../../providers/google-cloud-vision-service/google-cloud-vision-service";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  infoItems: {};
  imageData: any;
  LabelId: any;
  userId: any;
  date: any;
  Dresult=[];
  constructor(
    private vision: GoogleCloudVisionServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {

    this.imageData = navParams.get('infoItem');
    this.LabelId = navParams.get('LabelId');
    this.userId = navParams.get('userId');
    this.date = navParams.get('date');



    // this.vision.getLabels(this.imageData).subscribe((result) => {
    //   // @ts-ignore
    //   this.Dresult =  result.responses[0].webDetection.webEntities;
    // });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
