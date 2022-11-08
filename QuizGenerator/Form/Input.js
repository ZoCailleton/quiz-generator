import HTMLElement from "../Utils/HTMLElement";

export default class Input extends HTMLElement {

  constructor({htmlFor, type, name, checked}) {

    super();
    
    this.tag = 'input';
    this.html = super.html;
    this.id = super.id;
    this.htmlFor = htmlFor;
    this.type = type;
    this.name = name;
    this.checked = checked;

    if(this.checked)
      this.html.checked = true;
      

  }

}
