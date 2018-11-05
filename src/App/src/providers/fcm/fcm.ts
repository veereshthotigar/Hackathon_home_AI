import { Injectable } from '@angular/core';
// @ts-ignore
import { Firebase } from '@ionic-native/firebase'
import {Platform} from "ionic-angular";
import {AngularFirestore} from "angularfire2/firestore";

@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform

  ) {}

  async getToken() {

    let token;

    if (this.platform.is("android")) {
      token = await this.firebaseNative.getToken();
    }
    if (this.platform.is("ios")) {
      token = await this.firebaseNative.getToken();
      await  this.firebaseNative.grantPermission();
    }

    if (!this.platform.is('cordova')) {
    }

    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;
    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'max'
    };

    return devicesRef.doc(token).set(docData)
  }

  listenToNotification(){
    return this.firebaseNative.onNotificationOpen()
  }

}
