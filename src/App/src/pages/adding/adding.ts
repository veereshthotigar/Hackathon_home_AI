import { Component } from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../models/profile";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Camera, CameraOptions} from "@ionic-native/camera";
// @ts-ignore
import {FirebaseObjectObservable } from "angularfire2/database-deprecated"

/**
 * Generated class for the AddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {
  profile = {} as Profile;
  ProPicItems: FirebaseObjectObservable<any[]>;
  SaveProPicItems:FirebaseObjectObservable<any[]>;
  private UploadPicItems: any;
  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alert: AlertController,
    private  afDatabase: AngularFireDatabase,
    private afdb: AngularFireDatabase,
    public camera: Camera,
    private actionSheetCtrl: ActionSheetController) {

  }

  createProfile1() {
      // this.afDatabase.object(`profile/`).set({Profile: this.profile, imageData: this.UploadPicItems})
      this.afDatabase.list(`5551Test/`).push({Test1: this.profile})
        .then(()=> this.navCtrl.setRoot('InfoPage'))
  }

  ProPictake2() {
    // @ts-ignore
    this.actionSheetCtrl.create({
      buttons:[
        {
          text: 'From Camera',
          handler: async () => {
            try {
              const options: CameraOptions = {
                quality: 50,
                targetHeight: 600,
                targetWidth: 600,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
              };
              this.camera.getPicture(options).then((imageData) => {
                // @ts-ignore
                this.ProsaveResults1(imageData);
              }, err => {
                this.ProshowAlert1(err);
              });
            }
            catch (e) {
              console.error(e);
            }
          }
        },
        {
          text: 'From Gallery',
          handler: async () => {
            try {
              const options: CameraOptions = {
                quality: 100,
                targetHeight: 500,
                targetWidth: 500,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
              };
              this.camera.getPicture(options).then((imageData) => {
                // @ts-ignore
                this.ProsaveResults1(imageData);
              }, err => {
                this.ProshowAlert1(err);
              });
            }
            catch (e) {
              console.error(e);
            }
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {
            console.log("The user has selected the cancel button");
          }
        }
      ]
    }).present();
  }

  ProsaveResults1(imageData) {
    // this.ProPicItems.push({ imageData: imageData})
    this.UploadPicItems = imageData;
    this.afAuth.authState.take(1).subscribe(data => {
      // @ts-ignore
      this.SaveProPicItems = this.afDatabase.object(`profile/${data.uid}`).set({imageData: imageData})
        .then(_ => { })
        .catch(err => { this.ProshowAlert1(err) });
    })
    // this.ProPicItems.set({imageData: imageData})
  }

  ProshowAlert1(message) {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
