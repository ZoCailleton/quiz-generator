export default class HTMLElement {

  constructor({type, className, value}) {

    this.type = type || 'div';
    this.className = className;
    this.value = value;
    this.html = document.createElement(this.type);

    if(this.className != undefined) {
      this.html.classList.add(this.className);
    }

    if(this.value != undefined) {
      this.html.append(this.value);
    }

    return this.html;

  }
  
}
