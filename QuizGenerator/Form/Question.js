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
    
    this.answers = new Answers();
    
    this.html = new HTMLElement({
      type: 'div',
      className: 'question-wrapper'
    });

    this.addCoverField();
    this.addHeader();
    this.addTitleField();
    this.addControls();

    this.html.append(this.answers);

    return this.html;

  }

  addCoverField() {

    let cover = new HTMLElement({
      type: 'div',
      className: 'cover',
      value: 'Cover'
    });

    this.html.append(cover);

  }

  addHeader() {

    this.header = new HTMLElement({
      type: 'header'
    });

    this.html.append(this.header);
    
  }

  addControls() {

    let controls = new HTMLElement({
      type: 'button',
      value: 'Supprimer'
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
