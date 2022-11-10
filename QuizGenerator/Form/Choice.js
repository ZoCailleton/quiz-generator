import HTMLElement from "../Utils/HTMLElement";
import getUniqueID from "../Utils/getUniqueID";

export default class Choice {

  constructor({state, text, name, update, icon}) {

    this.state = state;
    this.text = text;
    this.name = name;
    this.update = update;
    this.icon = icon;

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

    if(this.icon != undefined) {

      let icon = new HTMLElement({
        tag: 'img',
        src: `./assets/icons/${this.icon}`
      });
      label.append(icon);

    }

    this.html.append(label);

  }
  
}
