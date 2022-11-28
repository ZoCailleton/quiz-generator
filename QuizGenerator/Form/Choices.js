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
      moreClasses: ['true', 'active']
    });

    trueElt.classList.add('true')

    let falseElt = new HTMLElement({
      tag: 'div',
      value: 'Faux',
      className: 'choice',
      moreClasses: ['false']
    });

    falseElt.classList.add('false')
  
    this.html.append(trueElt);
    this.html.append(falseElt);

    return this.html;

  }

}
