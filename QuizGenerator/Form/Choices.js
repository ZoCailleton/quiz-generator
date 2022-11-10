import Choice from "./Choice";
import HTMLElement from "../Utils/HTMLElement";
import getUniqueID from "../Utils/getUniqueID";

export default class Choices {

  constructor({choices}) {
    
    this.elements = choices || [
      {
        state: true,
        text: 'Vrai'
      },
      {
        state: false,
        text: 'Faux'
      }
    ]

    let name = getUniqueID();

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choices'
    });

    for(let choice of this.elements) {

      let choiceElt = new Choice({
        state: choice.state,
        text: choice.text,
        name,
        icon: choice.icon
      });
    
      this.html.append(choiceElt);

    }

    return this.html;

  }

}
