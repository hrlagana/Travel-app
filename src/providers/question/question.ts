import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';


@Injectable()
export class QuestionProvider {
    

    public QuestionListRef: Reference;
    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.QuestionListRef = firebase
                    .database()
                    .ref(`/countries/`);
            }
        });
    }
}