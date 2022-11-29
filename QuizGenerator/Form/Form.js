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
    
    if(window.location.hash.replace('#', '') === 'debug') this.debug = true;
    
    this.questions = [];

    this.code = '';

    this.controls = new Controls();

    this.id = getUniqueID();
    
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

    document.querySelector('.copy-code').addEventListener('click', () => {
      const body = document.body;
      const area = document.createElement('textarea');
      body.appendChild(area);
      area.value = this.code;
      area.select();
      document.execCommand('copy');
      body.removeChild(area);
      document.querySelector('.copy-code').innerHTML = 'Code copié ✓';
    })

    /**
     * TODO :
     * - Replace the setTimeout with a callback function
     * - Live update of all indexes
     * - New True / False choices design
     */

    setTimeout(() => {

      this.updateAll();
      
      this.getCode();

      for(let elt of document.querySelectorAll('.choice, .answers-type, .remove, .add-response')) {
        elt.addEventListener('click', () => {
          this.getCode();
        });
      }

      this.setupScrollObserver();

    }, 1000);

    this.form.addEventListener('keyup', () => {
      this.getCode();
    });

    this.form.addEventListener('change', () => {
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

    let id = this.id;

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

            if(cover != '') {
              this.code += `
                <figure class="illustration-${id}">
                  <img src="${cover}" role="presentation">
                </figure>
              `;
            }
            
            this.code += `
            <section class="content-${id}">
              <p class="heading-${id}">${question.querySelector('.title-wrapper input').value}</p>
              <div class="choices-${id}">`;

              for(let answer of question.querySelectorAll('.answers .grid.active .answer-wrapper')) {

                let type = answer.dataset.type;

                if(answer.querySelector('fieldset input').value !== '') {

                  let state = answer.querySelector('.choice.active').dataset.value;

                  this.code += `<div data-state=${state} class="choice-${id} ${type}-${id} ${state}">`;

                  if(type === 'text') {
                  
                    this.code += `${answer.querySelector('fieldset input').value}`;
                    this.code += `<div class="state-${id} ${answer.querySelector('.choice.active').dataset.value}"></div>`;
                    
                  } else if(type === 'photo') {

                    this.code += `<img src="${answer.querySelector('fieldset.image-field input').value}" role="presentation">`;
                    this.code += `<p>${answer.querySelector('fieldset:not(.image-field) input').value}</p>`;

                  } else if(type === 'video') {

                    this.code += `
                    <video>
                      <source src="${answer.querySelector('fieldset.video-field input').value}" type="video/mp4">
                    </video>`

                  }

                  this.code += `</div>`;

                }

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
        <div class="control control-${id} prev">Question précédente</div>
        <div class="control control-${id} next">Question suivante</div>
      </div>
    </div>
    `;

    this.code += getQuizScript(id);

    document.getElementById('quiz-demo').innerHTML = this.code;

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

  setupScrollObserver() {

    const cardObsCallback = (entries) => {
      entries.forEach(entry => {
        let index = entry.target.dataset.index
      });
    }
    
    const observer = new IntersectionObserver(cardObsCallback, {threshold: 0.5});
    const arr = document.querySelectorAll('.question-wrapper');
    arr.forEach((v) => {
      observer.observe(v);
    })

  }

}
