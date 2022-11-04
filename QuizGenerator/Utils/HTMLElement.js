export default class HTMLElement {

  constructor({tag, id, className, value, htmlFor, type, name}) {

    this.tag = tag || 'div';
    this.className = className;
    this.value = value;
    this.id = id;
    this.htmlFor = htmlFor;
    this.type = type;
    this.name = name;

    this.html = document.createElement(this.tag);

    if(this.id != undefined)
      this.html.id = this.id;

    if(this.className != undefined)
      this.html.classList.add(this.className);

    if(this.value != undefined)
      this.html.append(this.value);

    if(this.htmlFor != undefined)
      this.html.setAttribute('for', this.htmlFor);

    if(this.type != undefined)
      this.html.setAttribute('type', this.type);

    if(this.name != undefined)
      this.html.setAttribute('name', this.name);

    return this.html;

  }
  
}
