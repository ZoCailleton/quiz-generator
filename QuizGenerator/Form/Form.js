import Question from './Question';
import Controls from './Controls';
import HTMLElement from "../Utils/HTMLElement";
import getUniqueID from '../Utils/getUniqueID';
import getQuizCSS from '../Utils/getQuizCSS';
import getQuizScript from '../Utils/getQuizScript';
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

    this.code = '';

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

      new Sortable(document.querySelectorAll('.answers-wrapper'), {
        draggable: '.answer-wrapper',
      });

      this.updateAll();

    }, 1000);

    document.body.addEventListener('click', () => {
      this.getCode();
    });
    
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

  getCode() {

    let id = getUniqueID();

    const questions = document.querySelectorAll('.question-wrapper');

    this.code = getQuizCSS(id);

    this.code += `
    <div id="quiz-${id}" class="wrapper-${id}">
      <div class="questions-wrapper-${id}">
    `;

    let i=0;

      for(let question of questions) {

        i++;

        this.code += `
        <article class="question-${id}${i === 1 ? ' active' : ' '}">
            <header>
              <p class="heading-${id}">Question ${i} / ${questions.length}</p>
              <div class="index">`;
              let j=0;
              for(let question of questions) {
                j++;
                this.html += `<div${j===1 ? 'class="active"' : ''}></div>`;
              }
              this.code += `
              </div>
            </header>`;

            let cover = question.querySelector('.cover input').value;

            this.code += `<figure class="illustration-${id}">`;

            if(cover != '') {
              this.code += `
                <img src="${cover}" role="presentation">
              `;
            }

            this.code += `</figure>`;
            
            this.code += `
            <section class="content-${id}">
              <p class="heading-${id}">${question.querySelector('.title-wrapper input').value}</p>
              <div class="choices-${id}">`;

              for(let answer of question.querySelectorAll('.answers .grid.active .answer-wrapper')) {
                
                this.code += `
                <div class="choice-${id}">${answer.querySelector('.text-field input').value}</div>`;

              }

            this.code += `
              </div>
            </section>`

            let explaination = question.querySelector('.explaination textarea');

            if(explaination.value != '') {

              this.code += `
              <section class="justification-${id}">
                <p>${explaination.value}</p>
              </section>`
            }

            this.code += `
        </article>`;

      }

    this.code += `
      </div>
      <div class="controls controls-${id}">
        <div class="control control-${id}">Question précédente</div>
        <div class="control control-${id}">Question suivante</div>
      </div>
    </div>
    `;

    this.code += getQuizScript(id);

    document.getElementById('quiz-demo').innerHTML = this.code;
    
    console.log(this.code);

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
