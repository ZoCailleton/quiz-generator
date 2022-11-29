import Menu from '../Menu/Menu';
import Form from '../Form/Form';
import Field from './Field';
import Answers from './Answers';
import HTMLElement from '../Utils/HTMLElement';
import Choices from './Choices';
import reset from '../Utils/reset';
import checkURLValidity from '../Utils/checkURLValidity';

export default class Question {

  constructor({title, index}) {

    this.menu = new Menu();
    this.form = new Form();
    
    this.title = title;
    this.index = index;
    
    this.explaination = null;
    this.cover = null;
    
    this.open = true;
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'question-wrapper'
    });

    this.html.dataset.index = index;

    // HTML Objects
    this.headerElt = null;
    this.answersElt = null;
    this.answersTypeElt = null;
    
    this.setupHeader();
    this.setupTitle();
    this.setupCover();
    this.setupAnswersTypeMenu();
    this.setupAnswers();
    this.setupExplaination();

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

    let closeButton = new HTMLElement({
      tag: 'button',
      className: 'close',
      value: 'Fermer'
    });

    let deleteButton = new HTMLElement({
      tag: 'button',
      value: '<img src="./assets/icons/bin.png" role="presentation"> Supprimer'
    });

    closeButton.addEventListener('click', () => {
      this.toggleClose();
    });

    deleteButton.addEventListener('click', () => {
      this.delete();
    });

    controls.append(closeButton);
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
      type: 'url',
      title: `Image d'illustration (Copier l'URL)`,
      placeholder: `URL de l'image...`,
      category: 'photo'
    });

    coverInput.addEventListener('change', e => {
      
      let value = e.target.value;

      /**
       * TODO :
       * - Check the image url
       * - Remove class when url is removed
       */

      if(checkURLValidity({url: value, type: 'photo'})) {

        this.cover = value;
        coverElt.classList.add('active');
        coverElt.style.backgroundImage = `url(${this.cover})`;

      } else {

        coverElt.classList.remove('active');
        coverElt.style.backgroundImage = ``;

      }

    });

    coverElt.append(coverInput);

    this.html.append(coverElt);

  }

  setupAnswersTypeMenu() {

    /**
     * TODO :
     * - Automate this with functions
     */

    this.answersTypeElt = new HTMLElement({
      tag: 'div',
      className: 'answers-type',
      moreClasses: ['box']
    });

    let itemText = new HTMLElement({
      tag: 'div',
      className: 'choice',
      moreClasses: ['active'],
      value: '<img src="./assets/icons/text.png" role="presentation" /> Réponses texte'
    });

    let itemPhoto = new HTMLElement({
      tag: 'div',
      className: 'choice',
      value: '<img src="./assets/icons/photo.png" role="presentation" /> Réponses photo'
    });

    let itemVideo = new HTMLElement({
      tag: 'div',
      className: 'choice',
      value: '<img src="./assets/icons/film.png" role="presentation" /> Réponses vidéo'
    });

    itemText.addEventListener('click', () => {

      reset([itemPhoto, itemVideo], 'active');
      itemText.classList.add('active');

      reset(this.html.querySelectorAll('.answers .grid'), 'active');
      this.html.querySelector('.answers .grid:nth-child(1)').classList.add('active');

    });

    itemPhoto.addEventListener('click', () => {

      reset([itemText, itemVideo], 'active');
      itemPhoto.classList.add('active');

      reset(this.html.querySelectorAll('.answers .grid'), 'active');
      this.html.querySelector('.answers .grid:nth-child(2)').classList.add('active');

    });

    itemVideo.addEventListener('click', () => {

      reset([itemText, itemPhoto], 'active');
      itemVideo.classList.add('active');

      reset(this.html.querySelectorAll('.answers .grid'), 'active');
      this.html.querySelector('.answers .grid:nth-child(3)').classList.add('active');

    });

    for(let elt of this.answersTypeElt.querySelectorAll('input')) {
      elt.addEventListener('change', e => {
        //console.log(e.target.value)
      })
    }

    this.answersTypeElt.append(itemText);
    this.answersTypeElt.append(itemPhoto);
    this.answersTypeElt.append(itemVideo);

    this.html.append(this.answersTypeElt);

  }

  setupAnswers() {

    this.answersElt = new Answers();
    this.html.append(this.answersElt);
    
  }

  setupExplaination() {

    let explainationElt = new HTMLElement({
      tag: 'div',
      className: 'explaination'
    });

    let textarea = new HTMLElement({
      tag: 'textarea',
      placeholder: 'Explications...'
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
