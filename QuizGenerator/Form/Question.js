import Menu from '../Menu/Menu';
import Form from '../Form/Form';
import Field from './Field';
import Answers from './Answers';
import HTMLElement from '../Utils/HTMLElement';
import Choices from './Choices';

export default class Question {

  constructor({title, index, type}) {

    this.menu = new Menu();
    this.form = new Form();
    
    this.title = title;
    this.index = index;
    this.type = type;
    
    this.explaination = null;
    this.cover = null;
    
    this.open = true;
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'question-wrapper'
    });

    // HTML Objects
    this.headerElt = null;
    this.answersElt = null;
    
    this.setupHeader();
    this.setupTitle();
    this.setupCover();
    this.setupAnswersTypeElt();
    this.setupAnswersElt('text');
    this.setupExplainationElt();

  }

  setupTitle() {

    let titleWrapper = new HTMLElement({
      tag: 'div',
      className: 'title-wrapper',
      moreClasses: ['box']
    });
    
    let titleField = new Field({
      type: 'text',
      title: `Intitulé de la question`,
      placeholder: 'Qui est le président de la République Française ?'
    });

    titleField.addEventListener('keyup', e => {
      let value = e.target.value;
      this.title = value;
    });

    titleWrapper.append(titleField);
    this.html.append(titleWrapper);

  }
  
  setupHeader() {

    this.headerElt = new HTMLElement({
      tag: 'header'
    });

    let title = new HTMLElement({
      tag: 'h2',
      className: 'title',
      value: `Question <span class="index">${this.index}</span> / <span class="total">2</span>`
    });

    let controls = new HTMLElement({
      tag: 'div',
      className: 'controls'
    });

    let replaceButton = new HTMLElement({
      tag: 'button',
      className: 'replace',
      value: 'Replace'
    });

    let closeButton = new HTMLElement({
      tag: 'button',
      className: 'close',
      value: 'Fermer'
    });

    let deleteButton = new HTMLElement({
      tag: 'button',
      value: 'Supprimer'
    });

    closeButton.addEventListener('click', () => {
      this.toggleClose();
    });

    deleteButton.addEventListener('click', () => {
      this.delete();
    });

    controls.append(closeButton);
    controls.append(replaceButton);
    controls.append(deleteButton);

    this.headerElt.append(title);
    this.headerElt.append(controls);
    
    this.html.append(this.headerElt);

  }

  setupCover() {

    let coverElt = new HTMLElement({
      tag: 'div',
      className: 'cover',
      moreClasses: ['box']
    });

    let coverInput = new Field({
      type: 'text',
      title: `Image d'illustration (Copier l'URL)`,
      placeholder: `URL de l'image...`
    });

    coverInput.addEventListener('change', e => {
      
      let value = e.target.value;
      
      this.cover = value;

      coverElt.style.backgroundImage = `url(${this.cover})`;

    });

    coverElt.append(coverInput);

    this.html.append(coverElt);

  }

  setupAnswersTypeElt() {

    let answersTypeElt = new Choices({choices: [
      {state: true, text: 'Réponses texte', icon: 'text.png'},
      {state: false, text: 'Réponses image', icon: 'photo.png'},
      {state: false, text: 'Réponses vidéo', icon: 'film.png'}
    ]});

    answersTypeElt.classList.add('answers-type', 'box');

    this.html.append(answersTypeElt);

  }

  setupAnswersElt(type) {
    
    this.answersElt = new Answers({type});

    this.html.append(this.answersElt);
    
  }

  setupExplainationElt() {

    let explainationElt = new HTMLElement({
      tag: 'div',
      className: 'explaination'
    });

    let textarea = new HTMLElement({
      tag: 'textarea',
      placeholder: 'Explications...'
    });

    textarea.addEventListener('keyup', e => {
      console.log(e.target.value);
    });

    explainationElt.append(textarea);

    this.html.append(explainationElt);
    
  }
  
  delete() {
    this.form.deleteQuestionByIndex(this.index);
    this.html.remove();
    this.form.updateAll();
  }
  
  toggleClose() {
    if(this.open) {
      this.html.classList.add('close');
      this.html.querySelector('header .close').innerHTML = 'Ouvrir';
      this.open = false;
    } else {
      this.html.classList.remove('close');
      this.html.querySelector('header .close').innerHTML = 'Fermer';
      this.open = true;
    }
  }
  
}
