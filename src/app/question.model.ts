import { Option } from './option.model';

export class Question {
  name: string;
  options: Option[];
  answerNumber: number;
  constructor(data: any) {
    this.name = data.name;
    this.options = [];
    data.options.forEach(o => {
      this.options.push(new Option(o));
    });
  }
}
