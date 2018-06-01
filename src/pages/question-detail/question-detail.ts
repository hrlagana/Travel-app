import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionProvider } from "../../providers/question/question";

import firebase from 'firebase';
/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "question-detail/:questionId"
})
@Component({
  selector: 'page-question-detail',
  templateUrl: 'question-detail.html',
})
export class QuestionDetailPage {

  public currentQuestion: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public QuestionProvider: QuestionProvider) {
  }

  ionViewDidLoad() {
    this.QuestionProvider
      .getQuestionDetail(this.navParams.get("questionId"))
      .on("value", QuestionSnapshot => {
        this.currentQuestion = QuestionSnapshot.val();
        this.currentQuestion.id = QuestionSnapshot.key;
      });

  }

  likeQuestion(questionId: string):void {
    this.QuestionProvider.likeQuestion(this.currentQuestion.id);    
  }

  dislikeQuestion(questionId: string):void {
    this.QuestionProvider.dislikeQuestion(this.currentQuestion.id);    
  }


}
