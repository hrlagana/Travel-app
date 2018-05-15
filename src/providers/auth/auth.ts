import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()

export class AuthProvider {

  constructor() { }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  googleLogin() {
    console.log("googleLogin started.");
    const provider = new firebase.auth.GoogleAuthProvider();

    if (!(<any>window).cordova) {
      return firebase.auth().signInWithPopup(provider);
    } else {
        return firebase.auth().signInWithRedirect(provider).then( () => {
          return firebase.auth().getRedirectResult().then( result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(token, user);
          }).catch(function(error) {        
            console.log(error.message);
          });
        }).catch(function(error) {        
          console.log(error.message);
        });
      }
  }
  

  signupUser(firstName: string, lastName: string, email: string, password: string, gender: string, DOB: string,country: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/firstName`)
          .set(firstName);
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/lastName`)
          .set(lastName);
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/email`)
          .set(email);
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/gender`)
          .set(gender);
        firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/DOB`)
          .set(DOB);
          firebase
          .database()
          .ref(`/userProfile/${newUser.uid}/country`)
          .set(country);
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    const userId: string = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return firebase.auth().signOut();
  }

}
