import Question from './Question';
import Controls from './Controls';
import HTMLElement from "../Utils/HTMLElement";
import { Droppable, Draggable, Sortable } from '@shopify/draggable';

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
      tag: 'div',
      className: 'form-wrapper'
    });
    
    this.form = new HTMLElement({
      tag: 'form'
    });

    this.form.addEventListener('submit', e => e.preventDefault());

    this.html.append(this.form);
    this.html.append(this.controls);

    this.addQuestion();
    this.addQuestion();

    /**
     * TODO :
     * - Replace the setTimeout with a callback function
     * - Live update of all indexes
     * - New True / False choices design
     */

    setTimeout(() => {

      const sortable = new Sortable(document.querySelectorAll('.answers-wrapper'), {
        draggable: '.answer-wrapper'
      });

      this.updateAll();

    }, 1000);
    
  }

  updateAll() {

    let i=0, j=0;

    const questions = document.querySelectorAll('.question-wrapper');

    for(let question of questions) {

      i++;

      question.querySelector('.title span.index').innerHTML = i;
      question.querySelector('.title span.total').innerHTML = questions.length;

      for(let grid of question.querySelectorAll('.grid')) {

        for(let answer of grid.querySelectorAll('.answer-wrapper')) {
  
          j++;
  
          answer.querySelector('span.index').innerHTML = j;
  
        }

        j=0;

      }

    }

  }

  addQuestion() {

    let question = new Question({
      title: `Nouvelle question`,
      index: this.questions.length + 1,
      type: 'text'
    });

    this.questions.push(question);
    this.form.append(question.html);

    this.updateAll();
    
  }

  deleteQuestionByIndex(index) {

    this.questions = this.questions.filter((question) => question.index !== index);

  }

}
