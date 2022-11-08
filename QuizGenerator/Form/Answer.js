import Field from "./Field";
import Choices from "./Choices";
import HTMLElement from "../Utils/HTMLElement";
import Form from "./Form";

export default class Answer {

  constructor({answer, placeholder, state, index}) {

    this.form = new Form();

    this.answer = answer;
    this.placeholder = placeholder || 'Réponse...';
    this.state = state;
    this.index = index;

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answer-wrapper',
      moreClasses: ['box']
    });

    this.setupField();
    this.setupFieldPhoto();
    this.setupChoices();
    this.setupControls();

  }

  setupField() {

    this.html.append(new Field({
      tag: 'text',
      title: `Réponse <span class="index">${this.index+1}</span>`,
      placeholder: this.placeholder,
      icon: 'text.png'
    }));

  }

  setupChoices() {

    let choices = new Choices({choices: [
      {
        state: true,
        text: 'Vrai'
      },
      {
        state: false,
        text: 'Faux'
      }
    ]});
    
    this.html.append(choices);

  }

  setupControls() {

    let controls = new HTMLElement({
      tag: 'div',
      className: 'controls'
    });

    let replaceElt = new HTMLElement({
      tag: 'img',
      className: 'replace',
      src: './assets/icons/menu.png'
    });

    let deleteElt = new HTMLElement({
      tag: 'img',
      className: 'remove',
      src: './assets/icons/close.png'
    });

    deleteElt.addEventListener('click', () => {
      this.delete();
    });
    
    controls.append(replaceElt);
    controls.append(deleteElt);
    this.html.append(controls);

  }

  updateQuestion(title) {

    this.title = title;
    
  }
  
  delete() {
    
    this.html.remove();
    this.form.updateAll();

  }

}
