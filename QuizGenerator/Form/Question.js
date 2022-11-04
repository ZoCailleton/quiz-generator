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
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'question-wrapper'
    });

    // HTML Objects
    this.headerElt = null;
    this.answersElt = null;
    
    this.setupHeaderElt();
    this.setupCoverElt();
    this.setupTypeFieldElt();
    this.setupAnswersElt();
    this.setupExplainationElt();

  }
  
  setupHeaderElt() {

    this.headerElt = new HTMLElement({
      tag: 'header'
    });

    this.html.append(this.headerElt);
    
    let titleField = new Field({
      type: 'text',
      title: `Question <span class="index">${this.index}</span>`,
      placeholder: 'Question...'
    });

    titleField.addEventListener('keyup', e => {

      let value = e.target.value;
      
      this.title = value;

    });

    this.headerElt.append(titleField);

    let deleteButton = new HTMLElement({
      tag: 'button',
      value: 'Supprimer'
    });

    this.headerElt.append(deleteButton);

    deleteButton.addEventListener('click', () => {

      this.delete();
      
    });

  }

  setupCoverElt() {

    let coverElt = new HTMLElement({
      tag: 'div',
      className: 'cover',
      value: 'Cover'
    });

    let coverInput = new Field({
      type: 'text',
      title: `Image d'illustration`,
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

  setupTypeFieldElt() {

    let typeFieldElt = new Choices([
      {state: true, text: 'Réponses texte'},
      {state: false, text: 'Réponses image'},
      {state: false, text: 'Réponses vidéo'}
    ]);

    this.html.append(typeFieldElt);

  }

  setupAnswersElt() {
    
    this.answersElt = new Answers({
      type: 'text'
    });

    this.html.append(this.answersElt);
    
  }

  setupExplainationElt() {

    let explainationElt = new HTMLElement({
      tag: 'div',
      className: 'explaination-elt'
    });

    let textarea = new HTMLElement({
      tag: 'textarea',
      placeholder: 'Explication...'
    });

    textarea.addEventListener('keyup', e => {
      console.log(e.target.value);
    });

    explainationElt.append(textarea);

    this.html.append(explainationElt);
    
  }
  
  delete() {
    
    this.form.deleteQuestionByIndex(this.index);

    this.menu.updateItems();

    this.html.remove();

  }
  
}
