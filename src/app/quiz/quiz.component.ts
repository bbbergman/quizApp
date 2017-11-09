import { Component, OnInit } from '@angular/core';
import {QuizService} from "../quiz.service";
import {Question} from "../question.model";
import {Option} from "../option.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[];
    activeQuestionIndex = 0;
    activeQuestion;
    numOfQuestion = 0;
    isFirst = true;
    isLast = false;
    showGrade = false;
    grade = 0;
    goodAnsweres = 0;
  questionScore = 0;

  constructor(private quizService: QuizService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://my-project-c46a9.firebaseio.com/numberOfQuestions.json').subscribe(data  => {
      this.numOfQuestion = data as number;
      console.log(this.numOfQuestion);
      this.questionScore = (100 / this.numOfQuestion);
    });
    this.questions = this.quizService.getQuiz();
    this.activeQuestion = this.questions[0];
    /// this.numOfQuestion = this.questions.length;
  }

  changeQuestion(index: number) {
    if (index < this.numOfQuestion && index >= 0) {
      this.activeQuestion = this.questions[index];
      this.activeQuestionIndex = index;
      this.isFirst = this.activeQuestionIndex === 0;
      this.isLast = this.activeQuestionIndex === this.numOfQuestion - 1;
    }
  }

  onSelect(question: Question, option: Option) {
  question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
}

  calculateGrade() {
    this.questions.forEach((q) => {if (q.options[q.answerNumber - 1].selected) this.grade += this.questionScore, this.goodAnsweres++; }) ;
    this.showGrade = true;
}

}
