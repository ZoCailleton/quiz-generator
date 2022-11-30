import Choice from "./Choice";
import HTMLElement from "../Utils/HTMLElement";

export default class Choices {

  constructor() {

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choices'
    });

    let trueElt = new HTMLElement({
      tag: 'div',
      value: 'Vrai',
      className: 'choice',
      moreClasses: ['true']
    });

    let falseElt = new HTMLElement({
      tag: 'div',
      value: 'Faux',
      className: 'choice',
      moreClasses: ['false', 'active']
    });

    trueElt.addEventListener('click', () => {
      trueElt.classList.add('active')
      falseElt.classList.remove('active')
    });

    falseElt.addEventListener('click', () => {
      falseElt.classList.add('active')
      trueElt.classList.remove('active')
    });

    trueElt.dataset.value = true;
    falseElt.dataset.value = false;
  
    this.html.append(trueElt);
    this.html.append(falseElt);

    return this.html;

  }

}
