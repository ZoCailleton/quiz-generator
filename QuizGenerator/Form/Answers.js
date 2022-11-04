import HTMLElement from "../Utils/HTMLElement";
import Field from "./Field";

export default class Answers {

  constructor() {

    this.answers = [];

    this.html = new HTMLElement({
      type: 'div',
      className: 'answers'
    });

    this.answersElt = new HTMLElement({
      type: 'div'
    });

    this.addAnswer();
    this.addAnswer();
    this.addAnswer();
    this.addAnswer();

    this.html.append(this.answersElt);
    
    this.addControls();

    return this.html;

  }

  addAnswer() {

    let answer = new Field({
      type: 'text',
      title: `Réponse ${this.answers.length + 1}`,
      placeholder: 'Réponse...'
    });

    this.answers.push(answer);

    this.answersElt.append(answer);

  }
  
  addControls() {

    let add = new HTMLElement({
      type: 'button',
      value: 'Ajouter une réponse'
    });

    add.addEventListener('click', () => {
      this.addAnswer();
    });

    this.html.append(add);
    
  }

}
