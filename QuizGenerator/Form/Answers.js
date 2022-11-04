import HTMLElement from "../Utils/HTMLElement";
import Answer from "./Answer";

export default class Answers {

  constructor({type}) {

    this.answers = [];

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
    this.addControls();

    return this.html;

  }

  addAnswer() {

    let answer = new Answer({index: this.answers.length});
    this.answers.push(answer);
    this.answersElt.append(answer.html);

  }

  addBaseAnswers() {

    this.addAnswer();
    this.addAnswer();

    this.html.append(this.answersElt);

  }
  
  addControls() {

    let add = new HTMLElement({
      tag: 'button',
      value: 'Ajouter une réponse'
    });

    add.addEventListener('click', () => {
      this.addAnswer();
    });

    this.html.append(add);
    
  }

}
