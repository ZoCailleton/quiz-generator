export default class HTMLElement {

  constructor({tag, id, className, value, htmlFor, type, placeholder, name, checked}) {

    this.tag = tag || 'div';
    this.id = id;
    this.className = className;
    this.value = value;

    // Inputs
    this.htmlFor = htmlFor;
    this.type = type;
    this.placeholder = placeholder;
    this.name = name;
    this.checked = checked;

    this.html = document.createElement(this.tag);

    if(this.id != undefined)
      this.html.id = this.id;

    if(this.className != undefined)
      this.html.classList.add(this.className);

    if(this.value != undefined)
      this.html.innerHTML = this.value;

    if(this.htmlFor != undefined)
      this.html.setAttribute('for', this.htmlFor);

    if(this.type != undefined)
      this.html.setAttribute('type', this.type);

    if(this.placeholder != undefined)
      this.html.placeholder = this.placeholder;

    if(this.name != undefined)
      this.html.setAttribute('name', this.name);

    if(this.checked != undefined)
      this.html.checked = this.checked;

    return this.html;

  }
  
}
