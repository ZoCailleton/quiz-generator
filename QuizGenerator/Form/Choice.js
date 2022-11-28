import HTMLElement from "../Utils/HTMLElement";
import getUniqueID from "../Utils/getUniqueID";

export default class Choice {

  constructor({state, text, name, update}) {

    this.state = state;
    this.text = text;
    this.name = name;
    this.update = update;

    this.id = getUniqueID();

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choice'
    });

    this.addRadioElement();
    this.addLabelElement();

    return this.html;

  }

  addRadioElement() {
    
    let radio = new HTMLElement({
      tag: 'input',
      id: this.id,
      name: this.name,
      type: 'radio',
      checked: this.state
    });

    this.html.append(radio);

  }

  addLabelElement() {
    
    let label = new HTMLElement({
      tag: 'label',
      htmlFor: this.id,
      value: this.text
    });

    this.html.append(label);

  }
  
}
