import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QuestionProvider } from "../../providers/question/question";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, AuthCredential } from '@firebase/auth-types';

import firebase from 'firebase';

/**
 * Generated class for the EventCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-question-create',
    templateUrl: 'question-create.html',
})
export class QuestionCreatePage {

    questionDate: String = new Date().toISOString();
    questionForm: FormGroup;

    currentUser: User;
    uid: String;


    constructor(public navCtrl: NavController, public questionProvider: QuestionProvider, public formBuilder: FormBuilder) {
        this.questionForm = formBuilder.group({
            'questionName': ['', Validators.compose([Validators.required])]
        });


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad QuestionCreatePage');
    }

    createQuestion(questionName: string, questionDate: string, uid: string, qlikes: number, qdislikes: number, answers: number
    ): void {
        var qName: string = this.questionForm.value.questionName;
        uid = firebase.auth().currentUser.uid;
        var qlikes: number = 0;
        var qdislikes: number = 0;
        var answers: number = 0;
        /*console.log(qName);*/
        this.questionProvider
            .createQuestion(qName, questionDate, uid, qlikes, qdislikes, answers)
            .then(newQuestion => {
                this.navCtrl.pop();
            });
        console.log('Question submitted');
    }


}
