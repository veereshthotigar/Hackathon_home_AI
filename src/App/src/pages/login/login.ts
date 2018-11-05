import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;

  private loginErrorString: string;
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
  )
{
  this.loginErrorString = "Unable to sign in. Please check your account information and try again.";
  }
  async doLogin(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('TabsPage');
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  signup1() {
    this.navCtrl.push('SignupPage');
  }




}

