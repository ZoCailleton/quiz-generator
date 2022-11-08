import Field from "./Field";
import Choices from "./Choices";
import HTMLElement from "../Utils/HTMLElement";

export default class Answer {

  constructor({answer, placeholder, state, index}) {

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
    this.setupChoices();
    this.setupControls();

  }

  setupField() {

    this.html.append(new Field({
      tag: 'text',
      title: `Réponse ${this.index+1}`,
      placeholder: this.placeholder
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

  }

}
