import HTMLElement from "../Utils/HTMLElement";
import Input from "../Utils/Input";
import UniqueID from "../Utils/UniqueID";

export default class Choice {

  constructor({state, text, name}) {

    this.id = new UniqueID().id;
    this.text = text;
    this.name = name;
    this.state = state;

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
