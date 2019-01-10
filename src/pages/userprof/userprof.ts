import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { QuestionProvider } from '../../providers/question/question';
import firebase from 'firebase';


/**
 * Generated class for the UserprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprof',
  templateUrl: 'userprof.html',
})
export class UserprofPage {
  public userProfile: any;
  public DOB: string;

  public interestList: Array<any>;
  public interestRef: firebase.database.Reference;

  public gender: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider, public profileProvider: ProfileProvider, public questionProvider: QuestionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofPage');
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }

}
