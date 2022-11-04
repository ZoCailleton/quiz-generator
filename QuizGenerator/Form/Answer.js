import Field from "./Field";
import Choices from "./Choices";
import HTMLElement from "../Utils/HTMLElement";

export default class Answer {

  constructor({answer, state, index}) {

    this.answer = answer;
    this.state = state;
    this.index = index;

    this.setup();
    this.addField();
    
    this.html.append(new Choices().html);

  }
  
  setup() {

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answer-wrapper'
    });

  }

  addField() {

    this.html.append(new Field({
      type: 'text',
      title: `Réponse ${this.index+1}`,
      placeholder: 'Réponse...'
    }));

  }

  updateQuestion(title) {

    this.title = title;
    
  }

}
