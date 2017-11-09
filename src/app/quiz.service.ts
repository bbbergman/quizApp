import {Question} from "./question.model";
import {Option} from "./option.model";

export class QuizService {
  private questions: Question[] = [
    {
      name: 'which city is the capital of englald?',
      options: [ { id: 1, name: 'liverpool', selected: false},
                { id: 2, name: 'dublin ', selected: false},
                { id: 3, name: 'london ', selected: false},
                { id: 4, name: 'manchester ', selected: false}],
      answerNumber: 3
    },
    {
      name: 'which city is the capital of israel?',
      options: [{id: 1, name: 'jerusalem', selected: false},
        {id: 2, name: 'haifa ', selected: false},
        {id: 3, name: 'tel aviv ', selected: false},
        {id: 4, name: 'beer sheva ', selected: false}],
      answerNumber: 1
    },
    {
      name: 'which city is the capital of usa?',
      options: [{id: 1, name: 'washington', selected: false},
        {id: 2, name: 'la ', selected: false},
        {id: 3, name: 'chicago ', selected: false},
        {id: 4, name: 'las vegas ', selected: false}],
      answerNumber: 1
    },
    {
      name: 'which city is the capital of spain?',
      options: [ { id: 1, name: 'barcelona', selected: false},
        { id: 2, name: 'madrid ',  selected: false},
        { id: 3, name: 'valencia ', selected: false },
        { id: 4, name: 'betis ', selected: false}] ,
      answerNumber: 2
    },
    {
      name: 'which country is in north america?',
      options: [{id: 1, name: 'argentina', selected: false},
        {id: 2, name: 'brazil ',  selected: false},
        {id: 3, name: 'mexico ',  selected: false},
        {id: 4, name: 'peru ',  selected: false}],
      answerNumber: 3
    },
    {
      name: 'which country is in south america?',
      options: [{id: 1, name: 'argentina',  selected: false},
        {id: 2, name: 'canada ',  selected: false},
        {id: 3, name: 'usa ',  selected: false},
        {id: 4, name: 'mexico ',  selected: false}],
      answerNumber: 1
    }
  ];
  getQuiz() {
    return this.questions.slice();
  }
}
