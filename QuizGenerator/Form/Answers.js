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

  add({placeholder, state=false}) {

    let answer = new Answer({index: this.elements.length, placeholder, state});
    answer.html.dataset.type = 'image';
    this.elements.push(answer);
    this.answersElt.append(answer.html);

  }

  addBaseAnswers() {

    this.add({
      placeholder: 'Emmanuel Macron...',
      state: true
    });
    this.add({placeholder: 'François Hollande...'});
    this.add({placeholder: 'Nicolas Sarkozy...'});

    this.html.append(this.answersElt);

  }
  
  setupControls() {

    let add = new HTMLElement({
      tag: 'button',
      value: 'Ajouter une réponse',
      className: 'add-response',
      moreClasses: ['box']
    });

    add.addEventListener('click', () => {
      this.add({placeholder: 'Nouvelle réponse...'});
    });

    this.html.append(add);
    
  }

}
