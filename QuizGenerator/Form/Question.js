import Menu from '../Menu/Menu';
import Form from '../Form/Form';
import Field from './Field';
import Answers from './Answers';
import HTMLElement from '../Utils/HTMLElement';
import UniqueID from '../Utils/UniqueID';

export default class Question {

  constructor({title, index, type}) {

    this.menu = new Menu();
    this.form = new Form();
    
    this.title = title;
    this.index = index;
    this.type = type;

    this.header;

    this.cover = '';
    
    this.answers = new Answers();
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'question-wrapper'
    });
    
    this.addHeader();
    this.addCover();
    this.addTypeField();

    this.html.append(this.answers);

  }
  
  addHeader() {

    this.header = new HTMLElement({
      tag: 'header'
    });

    this.html.append(this.header);
    
    let titleField = new Field({
      type: 'text',
      title: `Question <span class="index">${this.index}</span>`,
      placeholder: 'Question...'
    });

    titleField.addEventListener('keyup', e => {

      let value = e.target.value;
      this.title = e.target.value;

    });

    this.header.append(titleField);

    let controls = new HTMLElement({
      tag: 'button',
      value: 'Supprimer'
    });

    this.header.append(controls);

    controls.addEventListener('click', () => {

      this.delete();
      
    });

  }

  addCover() {

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

  addTypeField() {

    let typeField = new HTMLElement({
      tag: 'div',
      className: 'question-type'
    });

    let name = new UniqueID().id;

    let text = new Field({
      title: 'Réponses texte',
      type: 'radio',
      name
    });

    let image = new Field({
      title: 'Réponses images',
      type: 'radio',
      name
    });

    let video = new Field({
      title: 'Réponses vidéos',
      type: 'radio',
      name
    });

    typeField.append(text, image, video);

    this.html.append(typeField);

  }
  
  delete() {
    
    this.form.deleteQuestionByIndex(this.index);

    this.menu.updateItems();

    this.html.remove();

  }
  
}
