import HTMLElement from "../Utils/HTMLElement";
import Answer from "./Answer";

export default class Answers {

  constructor({type}) {

    this.elements = [];

    this.type = type || 'text';

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answers'
    });

    this.answersElt = new HTMLElement({
      tag: 'div',
      className: 'grid'
    });
    
    this.addBaseAnswers();
    this.setupControls();

    return this.html;

  }

  add() {

    let answer = new Answer({index: this.elements.length});
    this.elements.push(answer);
    this.answersElt.append(answer.html);

  }

  addBaseAnswers() {

    this.add();
    this.add();

    this.html.append(this.answersElt);

  }
  
  setupControls() {

    let add = new HTMLElement({
      tag: 'button',
      value: 'Ajouter une réponse'
    });

    add.addEventListener('click', () => {
      this.add();
    });

    this.html.append(add);
    
  }

}
