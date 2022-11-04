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

    this.setupForm();

    this.html.append(this.controls);

    this.addQuestion();
    this.addQuestion();
    
  }

  setupForm() {
    
    this.form = new HTMLElement({
      type: 'form'
    });

    this.form.addEventListener('submit', e => e.preventDefault());

    this.html.append(this.form);

  }

  addQuestion() {

    let question = new Question({
      title: `Nouvelle question`,
      index: this.questions.length + 1
    });

    this.questions.push(question);

    this.form.append(question);
    
  }

}
