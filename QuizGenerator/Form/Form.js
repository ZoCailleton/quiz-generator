import Question from './Question';
import Controls from './Controls';
import HTMLElement from "../Utils/HTMLElement";
import getUniqueID from '../Utils/getUniqueID';
import getQuizCSS from '../Utils/getQuizCSS';
import getQuizScript from '../Utils/getQuizScript';

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

    this.demoIndex = 1;
    
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

    this.setupDemoControls();
    this.setupScrollObserver();

    /**
     * TODO :
     * - Replace the setTimeout with a callback function
     * - Live update of all indexes
     * - New True / False choices design
     */

    setTimeout(() => {

      this.updateAll();
      
      this.getCode();

    }, 1000);

    document.addEventListener('click', e => {

      const classesToCheck = [
        '.choice',
        '.answers-type',
        '.remove',
        '.add-response',
        '.add-question',
        '.answers-type',
        '.choice',
        '.delete'
      ]

      for(let className of classesToCheck) {
        const elt = e.target.closest(className);
        if(elt) this.getCode();
      }

    })

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

            <header class="header-${id}">
              <p class="heading-${id}">Question ${i} / ${questions.length}</p>`
              if(questions.length > 1) {
                this.code += `
                <div class="index-${id}">`;
                  for(let j=1; j<=questions.length; j++) {
                    this.code += `<div${i === j ? ' class="active"' : ''}></div>`;
                  }
                  this.code += `
                </div>
                `
              }
              this.code += `
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
                    
                    <iframe width="560" height="315" src="${answer.querySelector('fieldset.video-field input').value}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    `

                  }

                  this.code += `</div>`;

                }

              }

            this.code += `
              </div>
            </section>`

            let explaination = question.querySelector('.explaination textarea');

            if(explaination.value != '') {

              console.log(explaination.value)

              this.code += `
              <section class="justification-${id}">
                <div class="side-${id}">
                  <img src="./assets/icons/info.png" role="presentation">
                </div>
                <p>${explaination.value}</p>
              </section>`

            }

            this.code += `

        </article>`;

      }

    this.code += `
      </div>
      <div class="controls-${id}">
        <div class="control-${id} prev-${id}">Question précédente</div>
        <div class="control-${id} next-${id}">Question suivante</div>
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

  updateDemoQuestions() {

    for(let question of document.querySelectorAll(`.question-${this.id}`)) {
      question.classList.remove('active');
    }
    document.querySelector(`.question-${this.id}:nth-child(${this.demoIndex})`)?.classList.add('active');
    
  }

  setupDemoControls() {

    document.addEventListener('click', e => {

      const prev = e.target.closest(`.prev-${this.id}`);
      const next = e.target.closest(`.next-${this.id}`);

      if(prev){
        if(this.demoIndex > 1) {
          this.demoIndex --;
          this.updateDemoQuestions();
        }
      }

      if(next) {
        if(this.demoIndex < this.questions.length) {
          this.demoIndex ++;
          this.updateDemoQuestion();
        }
      }

    })

  }

  setupScrollObserver() {

    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      let checked = false;
      for(let question of document.querySelectorAll('.question-wrapper')) {
        if(scroll > question.offsetTop - (window.innerHeight / 4) && scroll < question.offsetTop + question.offsetHeight) {
          if(!checked) {
            console.log(this.demoIndex);
            this.demoIndex = question.dataset.index;
            this.updateDemoQuestions();
            checked = true;
          }
        } else {
          checked = false;
        }
      }
    });

  }

}
