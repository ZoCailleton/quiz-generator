import HTMLElement from "../Utils/HTMLElement";
import UniqueID from "../Utils/UniqueID";

export default class Choice {

  constructor({state, name}) {

    this.id = new UniqueID().id;
    this.name = name;
    this.state = state;
    this.text = '';
    this.html = new HTMLElement({
      tag: 'div',
      className: 'choice'
    });

    if(this.state) {
      this.text = 'Vrai';
    } else {
      this.text = 'Faux';
    }

    this.addRadioElement();
    this.addLabelElement();

    return this.html;

  }

  addRadioElement() {
    
    let radio = new HTMLElement({
      tag: 'input',
      id: this.id,
      name: this.name,
      type: 'radio'
    });

    if(this.state)
      radio.checked = true;

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
