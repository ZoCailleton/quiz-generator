import Menu from '../Menu/Menu';
import Field from './Field';
import Answers from './Answers';
import HTMLElement from '../Utils/HTMLElement';

export default class Question {

  constructor({title, index}) {

    this.menu = new Menu();
    
    this.title = title;
    this.index = index;
    this.header;
    this.cover = '';
    
    this.answers = new Answers();
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'question-wrapper'
    });

    this.header = new HTMLElement({
      tag: 'header'
    });

    this.addCoverField();
    this.addTitleField();
    
    this.addControls();

    this.html.append(this.header);
    this.html.append(this.answers);

    return this.html;

  }

  addCoverField() {

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

  addControls() {

    let controls = new HTMLElement({
      tag: 'button',
      value: 'Supprimer'
    });

    controls.addEventListener('click', () => {
      this.delete();
    });

    this.header.append(controls);

  }

  addTitleField() {
    
    let titleField = new Field({
      type: 'text',
      title: `Question ${this.index}`,
      placeholder: 'Question...'
    });

    titleField.addEventListener('keyup', e => {
      this.menu.updateItemTitle(this.index-1, e.target.value);
    });

    this.header.append(titleField);
    
  }
  
  delete() {

    this.html.remove();

  }
  
}
