import Field from "./Field";
import Choices from "./Choices";
import HTMLElement from "../Utils/HTMLElement";

export default class Answer {

  constructor({answer, state, index}) {

    this.answer = answer;
    this.state = state;
    this.index = index;

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answer-wrapper'
    });

    this.addField();
    this.addControls();
    
    this.html.append(new Choices().html);

  }

  addField() {

    this.html.append(new Field({
      tag: 'text',
      title: `Réponse ${this.index+1}`,
      placeholder: 'Réponse...'
    }));

  }

  addControls() {

    let button = new HTMLElement({
      tag: 'button',
      value: 'Supprimer'
    });

    button.addEventListener('click', () => {
      this.delete();
    });

    this.html.append(button);

  }

  updateQuestion(title) {

    this.title = title;
    
  }
  
  delete() {

    this.html.remove();

  }

}
