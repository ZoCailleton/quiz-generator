import Choice from "./Choice";
import HTMLElement from "../Utils/HTMLElement";
import UniqueID from "../Utils/UniqueID";

export default class Choices {

  constructor({choices, update}) {
    
    this.update = update || null;
    
    this.choices = choices || [
      {
        state: true,
        text: 'Vrai'
      },
      {
        state: false,
        text: 'Faux'
      }
    ]

    let name = new UniqueID().id;

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choices'
    });

    for(let choice of this.choices) {

      let choiceElt = new Choice({
        state: choice.state,
        text: choice.text,
        name,
        update: this.update
      });
    
      this.html.append(choiceElt);

    }

    return this.html;

  }

}
