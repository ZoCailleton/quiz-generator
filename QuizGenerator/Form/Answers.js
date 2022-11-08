import HTMLElement from "../Utils/HTMLElement";
import Answer from "./Answer";

export default class Answers {

  constructor() {

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answers'
    });
    
    this.setupAnswers('text', 'active');
    this.setupAnswers('photo');
    this.setupAnswers('video');

    return this.html;

  }

  add({placeholder, type, state=false}) {

    let answer = new Answer({index: 1, placeholder, state, type});

    document.querySelector(`.grid.${type}`).append(answer.html);

  }

  setupAnswers(type, active) {

    let wrapper = new HTMLElement({
      tag: 'div',
      className: 'grid',
      moreClasses: [type]
    });

    if(active) {
      wrapper.classList.add('active');
    }

    wrapper.append(new Answer({index: 1, placeholder: 'Emmanuel Macron...', type, state: true}).html);
    wrapper.append(new Answer({index: 2, placeholder: 'François Hollande...', type}).html);
    wrapper.append(new Answer({index: 3, placeholder: 'Nicolas Sarkozy...', type}).html);

    let add = new HTMLElement({
      tag: 'button',
      value: 'Ajouter une réponse',
      className: 'add-response',
      moreClasses: ['box', type]
    });

    add.addEventListener('click', () => {
      this.add({placeholder: 'Nouvelle réponse...'});
    });

    wrapper.append(add);

    this.html.append(wrapper);

  }

}
