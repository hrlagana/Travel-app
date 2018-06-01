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
                    .ref(`/countries/questionList`);
            }
        });
    }

    createQuestion(
        questionName: string,
        questionDate: string,
        uid: string,
        qlikes: number,
        qdislikes: number,
        answers: number
    ): ThenableReference {
        return this.QuestionListRef.push({
            name: questionName,
            date: questionDate,
            userID: uid,
            qlikes: qlikes,
            qdislikes: qdislikes,
            answers: answers
        });
    }

    getQuestionList(): Reference {
        return this.QuestionListRef;
    }

    getQuestionDetail(questionId: string): Reference {
        return this.QuestionListRef.child(questionId);
    }


    likeQuestion(questionId: string): any {
        var dbRef = this.QuestionListRef.child(questionId).child('qlikes');

        dbRef.transaction(function (qlikes) {

            return (qlikes || 0) + 1;
            
        });
    }


    dislikeQuestion(questionId: string): any {
        var dbRef = this.QuestionListRef.child(questionId).child('qdislikes');

        dbRef.transaction(function (qdislikes) {

            return (qdislikes || 0) + 1;
            
        });
    }

}