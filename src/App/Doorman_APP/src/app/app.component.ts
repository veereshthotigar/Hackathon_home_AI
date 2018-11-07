import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Nav, Platform, ToastController} from 'ionic-angular';

import { FirstRunPage } from '../pages';
import {MainPage} from "../pages";
import { Settings } from '../providers';
import {AngularFireAuth} from "angularfire2/auth";
import {TabsPage} from "../pages/tabs/tabs";
import {WelcomePage} from "../pages/welcome/welcome";
import {FcmProvider} from "../providers/fcm/fcm";
import { tap } from "rxjs/operators";
import {DetailPage} from "../pages/detail/detail";

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  // rootPage = FirstRunPage;
  public rootPage;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Info', component: 'InfoPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'detail', component: 'DetailPage' }

  ];

  constructor(
    platform: Platform, settings: Settings,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    private splashScreen: SplashScreen) {

    platform.ready().then(() => {

      // Get a FCM token
      fcm.getToken();

      // Listen to incoming messages
      fcm.listenToNotification().pipe(
        // @ts-ignore
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            // @ts-ignore
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
        .subscribe();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid) {
        this.rootPage = MainPage;
      }
      else {
        this.rootPage = FirstRunPage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
