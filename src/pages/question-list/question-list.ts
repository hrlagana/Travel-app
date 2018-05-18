import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { QuestionProvider } from "../../providers/question/question";

@IonicPage()

@Component({
    selector: "page-question-list",
    templateUrl: "question-list.html"
})

export class QuestionListPage {
    public questionList: Array<any>;
    constructor(
        public navCtrl: NavController,
        public questionProvider: QuestionProvider
    ) { }

    ionViewDidLoad() {
        this.questionProvider.getQuestionList().on("value", questionListSnapshot => {
            this.questionList = [];
            questionListSnapshot.forEach(snap => {
                this.questionList.push({
                    id: snap.key,
                    name: snap.val().name,
                    date: snap.val().date
                });
                return false;
            });
        });
    }

    goToQuestionDetail(questionId): void {
        this.navCtrl.push('QuestionDetailPage', { questionId: questionId });
    }



}