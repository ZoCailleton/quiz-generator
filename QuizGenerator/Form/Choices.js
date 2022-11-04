import HTMLElement from "../Utils/HTMLElement";
import UniqueID from "../Utils/UniqueID";

export default class Choices {

  constructor() {

    this.id = new UniqueID();

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choices'
    });
    
    this.trueAnswer = new HTMLElement({
      tag: 'label',
      for: this.id
    });

  }

  addRadioElement() {
    
    let radioElt = new HTMLElement({
      tag: 'input',
      id: this.id
    });

    this.html.append(radioElt);

  }

}
