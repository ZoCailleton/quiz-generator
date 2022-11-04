import Question from './Question';
import Controls from './Controls';
import HTMLElement from "../Utils/HTMLElement";

let instance = null;

export default class Form {

  constructor() {

    if(instance) {
      return instance;
    }
  
    instance = this;
    
    this.questions = [];
    this.controls = new Controls();
    
    this.html = new HTMLElement({
      type: 'div',
      className: 'form-wrapper'
    });
    
    this.form = new HTMLElement({
      type: 'form'
    });

    this.form.addEventListener('submit', e => e.preventDefault());

    this.html.append(this.form);
    this.html.append(this.controls);

    this.addQuestion();
    this.addQuestion();
    
  }

  addQuestion() {

    let question = new Question({
      title: `Nouvelle question`,
      index: this.questions.length + 1,
      type: 'text'
    });

    this.questions.push(question);

    this.form.append(question.html);
    
  }

  deleteQuestionByIndex(index) {

    this.questions = this.questions.filter((question) => question.index !== index);

    this.updateQuestionsIndex();

  }

  updateQuestionsIndex() {

    let i = 0;

    for(let question of this.questions) {
      i++;
      question.index = i;
      question.html.querySelector('span.index').innerHTML = i;
    }

  }

}
