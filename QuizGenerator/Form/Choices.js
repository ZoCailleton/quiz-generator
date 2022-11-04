import Choice from "./Choice";
import HTMLElement from "../Utils/HTMLElement";
import UniqueID from "../Utils/UniqueID";

export default class Choices {

  constructor() {

    let name = new UniqueID().id;

    this.html = new HTMLElement({
      tag: 'div',
      className: 'choices'
    });
    
    this.html.append(new Choice({state: true, name}));
    this.html.append(new Choice({state: false, name}));

  }

}
