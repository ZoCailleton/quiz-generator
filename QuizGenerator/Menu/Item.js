import HTMLElement from "../Utils/HTMLElement";

export default class Item {

  constructor({index, title}) {

    this.index = index;
    this.title = title || '';

    this.html = new HTMLElement({
      type: 'div',
      value: `Question <span class="index">${this.index}</span> : <span class="value">${this.title}</span>`,
      className: 'item'
    });

  }

}
